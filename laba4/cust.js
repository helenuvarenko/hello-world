$(document).ready(function(){
    $('#hide').on('click', fHide);
    $('#show').on('click', fShow);
    $('#toggle').on('click', fToggle);
});

function fHide(){
    $('.test').hide(2000);
}

function fShow(){
    $('.test').show(2000);
}

function fToggle(){
    $('.test').toggle(2000);
}