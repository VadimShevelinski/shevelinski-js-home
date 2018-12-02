"use strict";

const ajaxHandlerScript="http://fe.it-academy.by/TestAjax2.php";
let Description;
let Name;
let listName=[];
let listId=[];
let state={};
let courses;

window.onhashchange=switchToStateFromURLHash;

function switchToStateFromURLHash() {
    const URLHash=window.location.hash;
    const stateStr=URLHash.substr(1);
    console.log(URLHash);
    if ( stateStr !== "" )
    {state = {pagename: stateStr};
    } else  state = {pagename:'Main_'};

    let pageHTML = '';
    if (!Name){
        Name = localStorage.getItem("Name");
    }
    switch ( state.pagename ) {
//содержание первой стр.
        case 'Main_':
            pageHTML+='<h1 style="text-align: center">Энциклопедия</h1>';
            pageHTML+='<a href="javascript://" onclick="switchToContentPage()"> список статей<a>';
            break;

//содержание второй стр.
        case 'Content_':
            pageHTML+='<h1 style="text-align: center;">Оглавление</h1>';
            ViewContent();
            pageHTML+='<div id="ISelectedCourse1" style="text-align: left"></h1>';
            break;

//содержание третьей стр.
        case `About${Name}_`:
            pageHTML+='<h1 style="position: absolute;left:35vw; width: 60vw;" id="CourseName"></h1>';
            pageHTML+='<span style="text-align: left" id="DescriptionContent"></span>';
            pageHTML+='<div id="ISelectedCourse2"></h1>';
            pageHTML+=RepeatViewContent();
            ViewDescription();
            ViewName();
            break;
    }
    document.getElementById('IPage').innerHTML = pageHTML;
}

function switchToState(newState) {
    let stateStr=newState.pagename;
    stateStr+="_";
    location.hash=stateStr;
}

function switchToMainPage() {
    switchToState( { pagename:'Main' } );
    console.log('сработала 1 стр.');
}

function switchToContentPage() {
    switchToState( { pagename:'Content' } );
    console.log('сработала 2 стр.');
}

function switchToAboutPage(selectedCourseId) {
    Name = selectedCourseId;
    switchToState( { pagename:`About${Name}`} );
    localStorage.setItem("Name", Name);
    console.log('сработала 3 стр.');
    console.log('объявление номера курса Name='+Name+' для отображения на третьей вкладке');
}

switchToStateFromURLHash();

function RepeatViewContent(){
    let optionsStr="";
    for (let x=0; x<listName.length; x++)
    {
        optionsStr+='<br>' + '-' + '<a href="javascript://" onclick=switchToAboutPage('+listId[x]+')>'+listName[x]+'</a>';
    }
    return optionsStr;
}

function ViewContent()    {
    $.ajax(ajaxHandlerScript, {
        type: 'GET',
        dataType: 'json',
        data: { func:'COURSES_JSON' },
        success: сoursesListReady,
        error: errorHandler
    });
}

function сoursesListReady(data) {
    courses=data;
    for (let c=0; c<courses.length; c++)
    {
        listName[c]=courses[c].name;
    }
    listName = listName.sort();

    for (let z=0; z<courses.length; z++)
    {
        for (let y=0; y<courses.length; y++)
        {
            if (listName[z] === courses[y].name)
            {
                listId[z]=courses[y].id;
            }
        }
    }
    let optionsStr="";
    for (let x=0; x<courses.length; x++)
    {
        optionsStr+='<br>' + '-' + '<a href="javascript://" onclick=switchToAboutPage('+listId[x]+')>'+listName[x]+'</a>';
    }
    document.getElementById('ISelectedCourse1').innerHTML= optionsStr;
}

function ViewName()    {
    $.ajax(ajaxHandlerScript, {
        type: 'GET',
        dataType: 'json',
        data: { func:'COURSES_JSON' },
        success: сoursesNameReady,
        error: errorHandler
    });
}

function сoursesNameReady(data) {
    courses=data;
    let optionsStr="";
    console.log('функция названия сработало с Name='+Name+'!');
    if (!Name){Name=localStorage.getItem("Name");};
    for ( let c=0; c<courses.length; c++ )
    {

        if ( parseInt(courses[c].id) === Name)
        {
            console.log('Название курса'+courses[c].name);
            optionsStr=courses[c].name;
        }
    }
    document.getElementById('CourseName').innerHTML=optionsStr;
}

function ViewDescription() {
    $.ajax(ajaxHandlerScript, {
        type: 'GET',
        dataType: 'html',
        data: { func:'COURSE_INFO', id:Name },
        success: courseInfoReady,
        error: errorHandler
    });
}

function courseInfoReady(data) {
    Description = data;
    document.getElementById('DescriptionContent').innerHTML=Description;
};

function errorHandler(statusStr,errorStr) {
    if (statusStr !== 'abort') {
        alert(statusStr+' '+errorStr);
    }
}