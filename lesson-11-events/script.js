(function () {
    var forms = [
        {label: "Разработчики:", type: "text", name: "razrab", width: 450},
        {label: "Название сайта:", type: "text", name: "sait", width: 450},
        {label: "URL сайта:", type: "url", name: "url-site", width: 300},
        {label: "Дата запуска сайта:", type: "date", name: "dade", width: 150},
        {label: "Посетителей в сутки:", type: "number", name: "users", width: 150},
        {label: "E-mail для связи:", type: "email", name: "email", width: 250},
        {
            label: "Рубрика каталога:",
            type: "select",
            name: "list",
            options: ["здоровье", "домашний уют", "бытовая техника"],
            width: 255
        },
        {label: "Размещение:", type: "radio", name: "radio", items: ["бесплатное", "платное", "VIP"]},
        {label: "Разрешить отзывы:", type: "checkbox", name: "val-1"},
        {label: "Описание сайта:", type: "textarea", name: "description", width: 600},
        {type: "submit", name: "pushilka", value: "Опубликовать"}
    ];


    function makeForm(arr, id_n) {
        var form = document.forms[id_n];
        var field = document.createElement("fieldset");
        field.style.border = '0';

        // цикл создания формы
        for (var i = 0; i < arr.length; i++) {
            var br = document.createElement('br');

            // функция повторяющихся действий
            function makeElem() {
                Elem.name = arr[i].name;
                Elem.style.width = arr[i].width + "px";
                Elem.style.marginTop = "10px";
                Elem.required = true;
                field.appendChild(Elem);
                field.appendChild(br);
            }

            // создание лэйбла
            if ('label' in arr[i]) {
                var lab = document.createElement('label');
                var Ltext = document.createTextNode(arr[i].label);
                lab.appendChild(Ltext);
                lab.style.width = "150px";
                lab.style.margin = "10px 0";
                lab.style.display = "inline-block";
                field.appendChild(lab);
            }

            function radioUpdate(){
                for (var k = 0; k < arr[i].items.length; k++) {
                    var Elem = document.createElement('input');
                    Elem.type = arr[i].type;
                    var text_radio = document.createTextNode(arr[i].items[k]);
                    field.appendChild(Elem);
                    field.appendChild(text_radio);
                    field.appendChild(br);
                }
            }

            function checkboxUpdate(){
                var Elem = document.createElement('input');
                Elem.type = arr[i].type;
                Elem.checked = true;
                makeElem();
            }

            function selectUpdate() {
                var Elem = document.createElement('select');
                // создание списка
                for (var k = 0; k < arr[i].options.length; k++) {
                    var option = document.createElement('option');
                    option.value = k;
                    var options = document.createTextNode(arr[i].options[k]);
                    option.appendChild(options);
                    Elem.appendChild(option);
                }
                makeElem();
            }

            function textareaUpdate() {
                var Elem = document.createElement('textarea');
                Elem.rows = 10;
                Elem.style.display = "block";
                makeElem();
            }

            function submitUpdate() {
                var Elem = document.createElement('input');
                Elem.type = arr[i].type;
                Elem.value = arr[i].value;
                makeElem();
            }

            switch (arr[i].type){
                case "radio":
                    radioUpdate();
                 break;

                case "checkbox":
                    checkboxUpdate();
                 break;
                 
                case "select":
                   selectUpdate();
                 break;

                case "textarea":
                    textareaUpdate();
                 break;

                case "submit":
                    submitUpdate();
                 break;

                default:
                    var Elem = document.createElement('input');
                    Elem.type = arr[i].type;
                    makeElem();
                    break;
            }

        }
        form.appendChild(field);
    }

    makeForm(forms, "dyn_form");
})();