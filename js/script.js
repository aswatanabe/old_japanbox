//window size
$(window).on('load resize', function(){
    const winW = $(window).width();
    let devW = 1025;
    if (winW <= devW) { //1025px以下のとき
        //hamburger
        $("nav > div").attr('id','burger');
        $("nav > div > div:nth-of-type(1)").attr('id','burger-btn');
        $("nav > div > div:nth-of-type(2)").attr('id','burger-menu');
        //footer
        $("footer > section:not(:nth-of-type(1)) > h2").attr('class', 'toggle');
    } else { //1024px以上のとき
        //hamburger
        $("nav > div").removeAttr('id');
        $("nav > div > div").removeAttr('id');
        $("nav > div > div").removeAttr('id');
        //footer
        $("footer > section:not(:nth-of-type(1)) > h2").removeClass('toggle');
        $("footer > section:not(:nth-of-type(1)) > ul").show();
    }
});

//hamburger
$(document).on('click', '#burger', function() {
    $(this).toggleClass('is-open');
    $("main").toggleClass("burger-blur");
});
$(document).on('click','.burger-blur', function() {
    $("#burger").removeClass('is-open');
    $("main").removeClass("burger-blur");
});

//footer
$(document).on('click', '.toggle', function(){ //
    $(this).toggleClass('active');
    $(this).next('ul').slideToggle();
});

// slick slider
$(".autoplay").slick({
    slidesToShow: 4, //PC
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3, //Tablet
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2, //SP
            },
        },
    ],
});