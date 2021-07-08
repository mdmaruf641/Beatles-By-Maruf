$(function(){
    
    // BACK TO TOP //

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 500){
            $(".down-top a").fadeIn(800);
        }
        else{
            $(".down-top a").fadeOut(800);
        } 
    });

    $(".down-top").click(function(){
        $('html, body').animate({scrollTop:0}, 1500);
    });


    // PRE LOADER //

    $(window).on("load", function(){
        $("#loading").delay(500) .fadeOut(2000)
    });

    //=====SKICLY MENU=====//

var headerPosition = $('#nav').offset().top;
$(window).scroll(function(){
    var scrollValue = $(window).scrollTop();
    if(scrollValue > headerPosition) {
        $('#nav').addClass('sticky')
    }
    else{
        $('#nav').removeClass('sticky');
    }
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })

    // PORTFOLIO SECTION //

    $('.main-port').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-left slick-prev pull-left'><i class='fad fa-chevron-double-left'aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-right slick-next pull-right'><i class='fad fa-chevron-double-right' aria-hidden='true'></i></button>"
      });

      // TEAM SECTION //

});

