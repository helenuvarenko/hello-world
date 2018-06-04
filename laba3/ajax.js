var pageLoad = function () {
    'use strict';
    var getXML = document.getElementById('getBlocks');
    var poem = document.getElementById('poem');

    function crXMLHttpRequest() {//возможность делать http запросы
        var res = false;
        if (window.XMLHttpRequest) {
            res = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            if (new ActiveXObject('Microsoft.XMLHTTP')) {
                res = new ActiveXObject('Microsoft.XMLHTTP');
            } else if (new ActiveXObject('Msxml2.XMLHTTP')) {
                res = new ActiveXObject('Msxml2.XMLHTTP');
            } else {
                res = false;
                alert('Ваш запит не можна відправити!');
            }
        }
        return res;
    }

    var request = crXMLHttpRequest();
    getXML.onclick = function () {
        //запрос для xml файла
        request.open('GET', './web1.xml', false);
        request.send();
        if (request.status != 200) {//выводим ошибки
            alert(request.status + ': ' + request.statusText);
        } else {
            var i,
                //создаём тамблицу для полученных данных
                xmlDoc = request.responseXML,
                table = '<tr><th>Блок</th><th>Опис</th></tr>',
                x = xmlDoc.getElementsByTagName('aim');
            for (i = 0; i < x.length; i++) {
                table += '<tr><td>' + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName('description')[0].childNodes[0].nodeValue;
            }
            document.getElementById('getBlocks').style.visibility = 'hidden';
            document.getElementById('forXML').innerHTML = table;//выводим таблицу
        }
    };
    var request2 = crXMLHttpRequest();
    poem.onclick = function () {
        //запрос для txt файла
        request2.open('GET', './poetry.txt', false);
        request2.send();
        if (request2.status != 200) {//выводим ошибки
            alert(request2.status + ': ' + request2.statusText);
        } else {
            //выводим полученную поэму
            document.getElementById('otvet').innerHTML = '<p id="stix">' + request2.responseText.replace(/\n/g, '<br />') + '</p>';
        }
    };
};
//запускаем скрипт при загрузке страцицы
if (window.addEventListener) {
    window.addEventListener('load', pageLoad);
} else {
    window.attachEvent('onload', pageLoad);
}
