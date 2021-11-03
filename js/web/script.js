$(function(){
    var rollHeader = 900;
    $(window).scroll(function() {
    var scroll = getCurrentScroll();
        if ( scroll >= rollHeader ) {
            $('header').addClass('roll');
        }
        else {
            $('header').removeClass('roll');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }


    //slide
    $('.post-wrapper').slick({
        slide:'div',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots : true,
        initialSlide:0,
        prevArrow : "<img src='/imgs/left-arrow.png' class='slick-prev'></img>",
		nextArrow : "<img src='/imgs/right-arrow.png' class='slick-next'></img>",
        arrows:true
    });


    //lang
    $("#lang").click(function(){

        $("#lang").toggleClass("on");

    });
});