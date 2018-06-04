"use strict";
// var sp = 0.2;
var images;
var img_count = 0;
var cont = true;//при натисканні користувача змінюється, щоб призупинити анімацію
function print_on_canvas(canv, contxt) { //друкуємо текст поверх анімації
    "use strict";
    contxt.font = 'bold 14pt Arial';
    contxt.fillStyle = 'white';
}

function draw_welcome() {
    "use strict";
    var welcome = document.getElementById('canvasGIF');
    var welcomecontext = welcome.getContext('2d');
    welcomecontext.drawImage(images[Math.floor(img_count / 10)], 0, 0);//малюємо рисунок
    img_count = Math.floor((img_count + 1) % 60);
    print_on_canvas(welcome, welcomecontext);//друкуємо текст
    if (cont) {
        requestAnimationFrame(draw_welcome);
    }
}

if (window.addEventListener) { //для ІЕ
    window.addEventListener('load', winload);
}
else {
    window.attachEvent('onload', winload);
}

function winload() {
    "use strict";
    if (document.all) { //ІЕ10- не має підтримки drawImage
        document.getElementById('canvasGIF').innerHTML = '<p id="error">Ваш браузер не може відобразити анімацію.</p>';
        return;
    }
    images = new Array(6); // масив картинок для анімації
    for (var i = 0; i < images.length; ++i) {
        images[i] = new Image();
        images[i].src = "img/gif/(" + i + ").gif";
    }
    draw_welcome();

    //задання розмірів при запуску
    document.getElementById('canvasGIF').width = 397;
    document.getElementById('canvasGIF').height = 480;
    document.getElementById('canvasGIF').onclick = function () {
        if (cont) {
            cont = false;
        }
        else {
            cont = true;
            draw_welcome();
        }
    }
}