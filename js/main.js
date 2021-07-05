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
});

//=====JAVA SCRIPT || SKICLY MENU=====//

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
  