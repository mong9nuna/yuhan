//event
$(function () {
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

    //sub2Banner remote
    $('#btn1').click(function(){
        var offset = $('#btn1').offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#btn2').click(function(){
        var offset = $('#btn2').offset();
        $('html, body').animate({scrollTop : offset.top}), 400;
    });
});