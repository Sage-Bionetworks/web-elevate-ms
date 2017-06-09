
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

    var videoLink = '<iframe src="//player.vimeo.com/video/216231561?title=0&amp;byline=0&amp;portrait=0&amp;color=e64f38" width="250" height="444.5" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';  

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

