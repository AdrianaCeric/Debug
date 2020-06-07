//code for navbar toggler background image

var active = false;
var button = document.getElementsByClassName('navbar-toggler')[0];
var element = document.getElementsByClassName('navbar-toggler-icon')[0];

button.addEventListener("click", function() {
    if (active) {
        element.style.backgroundImage = 'url(img/menu-icon-inactive.png)';
        active = false;
    } else {
        element.style.backgroundImage = 'url(img/menu-icon-active.png)';
        active = true;
    }
});