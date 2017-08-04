
$(window).load(function(){ 

    setTimeout(function() { 
        $('.loader').fadeOut('fast');
    },600);
});   


$(document).ready(function(){
    (function () {
        $('.hamburger-menu').on('click', function() {
            $('.bar').toggleClass('animate');
            $('.nav-wrap').toggleClass('open');
        })

        $('.signup-cta').on('click', function() {
            $('.bar').toggleClass('animate');
            $('.nav-wrap').toggleClass('open'); 
        });

    })();

    var videoLink = '<iframe src="https://player.vimeo.com/video/219149500?color=6dedfc&title=0&byline=0&portrait=0" width="250" height="444.5" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

    $('.playVid').click(function(){
        $('#iFrame').html(videoLink);    
    });
    $('.modal .close').click(function(){
        $('#iFrame').html('');    
    });


    $('.slider').slick( {
        autoplay  	    : false,
        adaptiveHeight  : true,
        pauseOnHover    : false
    });
    $('.sliderNext').click( function () {
        $( '.slider' ).slick( 'slickNext' );
    });
    $('.sliderPrev').click( function () {
        $('.slider').slick( 'slickPrev' );
    });

});

