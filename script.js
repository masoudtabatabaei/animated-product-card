document.addEventListener('mousemove' , parallax);

function parallax(ev) {
    var icons = document.querySelectorAll('.icon');

    icons.forEach(function (icon) {
        var moving_value = icon.getAttribute("data-value");

        var x = (ev.clientX * moving_value) / 100;
        var y = (ev.clientY * moving_value) / 100;

        icon.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}