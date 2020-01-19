document.addEventListener('DOMContentLoaded', function() {
    let moving__background = document.getElementById('header__background');
    ParallaxAnimation(moving__background);
});

function ParallaxAnimation(el) {
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop >= 0) {
            el.style.marginTop = window.pageYOffset/3 + 'px';
        }
        else {
            moving__background.style.marginTop = 0;
        }
    });
};