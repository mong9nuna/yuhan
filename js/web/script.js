$(function(){
    var rollHeader = 900;
    $(window).scroll(function(){
    var scroll = getCurrentScroll();
        if ( scroll >= rollHeader ){
            $('header').addClass('roll');
        }
        else {
            $('header').removeClass('roll');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
    /* .css({"transition": "all .7s ease-out"}) */

    //slide
    $('.post-wrapper').slick({
        slide:'div',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover : true,
        dots : true,
        initialSlide:0,
        prevArrow : "<img src='/imgs/left-arrow.png' class='slick-prev'></img>",
		nextArrow : "<img src='/imgs/right-arrow.png' class='slick-next'></img>",
        arrows:true
    });

    //event
    $('.eventInner').slick({
        slide:'div',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots : false,
        initialSlide:0,
        prevArrow : "<p class='btnprev'><img src='imgs/arrowL.png' alt=left'></p>",
		nextArrow : "<p class='btnnext'><img src='imgs/arrowR.png' alt=right'></p>",

    });

    $('.btnpause').click(function(){
        $('.eventInner').slick('slickPause');
        $('.btnpause').addClass("on");
        $('.btnplay').addClass("on");
    });
    $('.btnplay').click(function(){
        $('.eventInner').slick('slickPlay');
        $('.btnplay').removeClass("on");
        $('.btnpause').removeClass("on");
    });


    //lang
    $("#lang").click(function(){

        $("#lang").toggleClass("on");

    });
});