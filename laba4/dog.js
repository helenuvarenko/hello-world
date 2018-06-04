$(document).ready(function(){
    animBg();
});
function animBg() {
    $('.oen img').animate({
        'width': '200%',
        'left': '-50%',
        'top': '-50%'
    }, 3000)
        .animate({
            'width': '100%',
            'left': '0',
            'top': '0'
        }, 3000, animBg);
    //animBg();
}