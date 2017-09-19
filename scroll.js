document.addEventListener('DOMContentLoaded', function() {
    const moving__background = $("#header__background");

    window.addEventListener('scroll', function() {
        ParallaxAnimation(moving__background);
    });
});

function ParallaxAnimation(el) {
    el.css('margin-top', ($(window).scrollTop())/3); // Parallax scrolling
    el.css('opacity', 1 - ($(window).scrollTop())/el.height()); // Fading out
};