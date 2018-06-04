var password = document.getElementById("password")
    , confirm_password = document.getElementById("confimPassword");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

document.getElementById("submit").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
});


password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;