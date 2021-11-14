$(function(){
    var rollHeader = 500;
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

    //lang
    $("#lang").click(function(){

        $("#lang").toggleClass("on");

    });

    //sub3Banner remote
    $('#btn1').click(function(){
        var offset = $('#btn1').offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#btn2').click(function(){
        var offset = $('#btn2').offset();
        $('html, body').animate({scrollTop : offset.top}), 400;
    });
    $('#btn3').click(function(){
        var offset = $('#btn3').offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    });
});