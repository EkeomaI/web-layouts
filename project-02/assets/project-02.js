var thumb = document.getElementById("thumb");
var track = document.getElementById("track");
var logInPage = document.getElementById("part1");
var homePage = document.getElementById("part2");
var registerPage = document.getElementById("part3");
var switchText = document.getElementById("switch-text");
var registerLink = document.getElementById("register");
var loginLink = document.getElementById("login");

var loginForm = document.forms.login;
var registerForm = document.forms.register;

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
});

thumb.addEventListener("click", function() {
    track.classList.toggle("active");
    thumb.classList.toggle("active");
    switchText.classList.toggle("active");
    //check whether the login/register page is active
    if (registerPage.classList.contains("active")) {
        registerPage.classList.toggle("active");
        homePage.classList.toggle("active");
    } else {
        logInPage.classList.toggle("active");
        homePage.classList.toggle("active");
    }
});

registerLink.addEventListener("click", function() {
    logInPage.classList.toggle("active");
    registerPage.classList.toggle("active");
});

loginLink.addEventListener("click", function() {
    logInPage.classList.toggle("active");
    registerPage.classList.toggle("active");
});