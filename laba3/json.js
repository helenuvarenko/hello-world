document.getElementById("getJSON").addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'text.json', false);
    xhr.send();
    if (xhr.status!=200){
        alert(xhr.status+': '+ xhr.statusText);
    }else{
        var object = JSON.parse(xhr.response);
        var table = document.getElementById("forJSON");
        var row = table.insertRow();
        for (var key in object[0]){
            if(object[0].hasOwnProperty(key)){
                var row = table.insertRow();
                var keycell = row.insertCell();
                var valuecell = row.insertCell();
                keycell.innerHTML = key;
                valuecell.innerHTML = object[0][key];
            }
        }
    }
});