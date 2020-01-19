document.addEventListener('DOMContentLoaded', function() {
    let movingBackground = document.getElementById('header-background');
    ParallaxAnimation(movingBackground);
});

function ParallaxAnimation(el) {
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop >= 0) {
            el.style.marginTop = window.pageYOffset/3 + 'px';
        }
        else {
            el.style.marginTop = 0;
        }
    });
};