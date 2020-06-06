//code for navbar background image

var active = false;
var button = document.getElementsByClassName('navbar-toggler-icon')[0];

button.addEventListener("click", function() {
    if (active) {
        button.style.backgroundImage = 'url(img/menu-icon-inactive.png)';
        active = false;
    } else {
        button.style.backgroundImage = 'url(img/menu-icon-active.png)';
        active = true;
    }
});