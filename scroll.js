document.addEventListener('DOMContentLoaded', function() {
    const moving__background = document.querySelector('#header__background');

    window.addEventListener( 'scroll', function() {
        ParallaxAnimation( moving__background );
    });
});

function ParallaxAnimation( el ) {
    let scrollTop = document.body.scrollTop;

    el.style.marginTop = (scrollTop / 3) + 'px';
    el.style.opacity = (1 - scrollTop / el.offsetHeight );
};