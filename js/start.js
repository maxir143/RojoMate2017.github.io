$(document).ready(function() {
    $("#slide_1").slidesjs({
        width: 408,
        height: 408,
        navigation: {
            active: false,
            effect: "slide"
        },
        pagination: {
         active: false,
         effect: "slide"
     },
        play: {
        active: false,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
            effect: "slide",
            // [string] Can be either "slide" or "fade".
            interval: 2000,
            // [number] Time spent on each slide in milliseconds.
            auto: true,
            // [boolean] Start playing the slideshow on load.
            swap: true,
            // [boolean] show/hide stop and play buttons
            pauseOnHover: false,
            // [boolean] pause a playing slideshow on hover
            restartDelay: 2500
            // [number] restart delay on inactive slideshow
        }
      });
    var scene = document.getElementById('fullpage');
    var parallax = new Parallax(scene, {
    });
    $('#fullpage').fullpage({
        anchors: ['Menu','Rojo', 'Branding', 'BrandImage', 'BrandComunication','SocialMedia'],
        menu: '#MenuNav'
    });
});
