$(document).ready(function(){
    var moving__background = $("#header__background");
    $(window).scroll(function() { 
        moving__background.css('margin-top', ($(window).scrollTop())/3); // Parallax scrolling
        moving__background.css('opacity', 1 - ($(window).scrollTop())/moving__background.height()); // Fading out
    });
});