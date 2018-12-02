"use strict";

function tAJAXStorage(lsKeyName) {
    let self = this;
    self.name = 'shevelinski';
    self.hashStorage = {};
    self.password = 1111;
    $.ajax(
        "http://fe.it-academy.by/AjaxStringStorage2.php",
        {
            type: "POST",
            cache: false,
            dataType: "json",
            data: {
                f: "READ",
                n: self.name
            },
            success: DataLoaded,
            error: ErrorHandler
        }
    );

    function DataLoaded(data) {
        if (data !== " ") {
            self.hashStorage = JSON.parse(data.result);
            console.log("DataLoaded - " + data.result);
        } else if(data === " "){
            console.log(JSON.parse(data));
        }


    }

    self.addValue = function (key, value) {
        self.hashStorage[key] = value;
        addValueOnTheServer(self.hashStorage);
    };

    self.getValue = function (key) {
        if (key in self.hashStorage) {
            return self.hashStorage[key];
        } else {
            return undefined;
        }
    };

    self.deleteValue = function (key) {
        if (key in self.hashStorage) {
            delete self.hashStorage[key];
            addValueOnTheServer(self.hashStorage);
            return true;
        } else {
            return false;
        }
    };

    self.getKeys = function () {
        var keys = [];
        for (var key in self.hashStorage) {
            keys.push(" " + key);
        }

        return keys;
    };

    self.getList = function () {
        return Object.keys(self.hashStorage);
    };

    // функция которая будет сохранять на сервер изменённый хэш
    function addValueOnTheServer(hash) {
        $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
            {
                type: "POST",
                cache: false,
                dataType: "json",
                data: {
                    f: "LOCKGET",
                    n: self.name,
                    p: self.password
                },
                success: DataLoadedLockget,
                error: ErrorHandler
            }
        );

        function DataLoadedLockget(data) {
            console.log("DataLoadedLockget - " + data.result);

            $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
                {
                    type: "POST",
                    cache: false,
                    dataType: "json",
                    data: {
                        f: "UPDATE",
                        n: self.name,
                        p: self.password,
                        v: JSON.stringify(hash)
                    },
                    success: DataLoadedUpdate,
                    error: ErrorHandler
                }
            );

            function DataLoadedUpdate(data) {
                console.log("DataLoadedUpdate - " + data.result);
            }
        }
    }

    function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
        alert(StatusStr + " " + ErrorStr);
    }
}