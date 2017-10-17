document.addEventListener('DOMContentLoaded', function() {
    const moving__background = $("#header__background");

    window.addEventListener('scroll', function() {
        ParallaxAnimation(moving__background);
    });
});

function ParallaxAnimation(el) {
    el.css('margin-top', ($(window).scrollTop())/3); // Parallax scrolling. Increasing the denominator will make the parallax effect less pronounced.

    // Code below is for fading out. I left it in just in case you want to use it.
    //el.css('opacity', 1 - ($(window).scrollTop())/el.height()); 
};