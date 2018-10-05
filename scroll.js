document.addEventListener('DOMContentLoaded', function() {
    const moving__background = $("#header__background");
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop >= 0)
            ParallaxAnimation(moving__background);
        else
            moving__background.css('margin-top', 0);
    });
});

function ParallaxAnimation(el) {
    el.css('margin-top', ($(window).scrollTop())/3); // Parallax scrolling. Increasing the denominator will make the parallax effect less pronounced.
    //el.css('opacity', 1 - ($(window).scrollTop())/el.height()); // Code for fading out. I left it in just in case you want to use it.
};