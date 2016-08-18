

$(document).ready(function () {
    $('nav > div > ul > li > a').click(function () {
        $('nav .bg').fadeOut(200);
        $(this).parents('li').find('.bg').fadeIn(100);
        $('.upline:not(:visible)').fadeIn(100);

        var w = 0;
        var idx = $(this).parents('li').index();

        $.each($('nav > div > ul > li'), function (i, e) {
            if (i < idx) {
                w = w + $(e).width();
            }

            if (i == idx) {
                w = w + ($(e).width() / 2) + 3;
            }


        });


        $('.line .arrow').animate({
            marginLeft: w
        }, 300);

        console.log($(this).parents('li').index());
    });





    $('.search__auto-alphabet > ul > li > a').click(function () {
        $('.results__block').hide();
        $('.search__auto-alphabet > ul > li > a').removeClass('active');
        $(this).addClass('active');
        var idx = $(this).data('block');
        $('.' + idx).show();
        return false;
    });





    var sliderBg = $('.bx-carousel-bg').bxSlider({
        slideWidth: ($(window).width() / 2),
        minSlides: 2,
        maxSlides: 2,
        pager: false,
        controls: false
    });

    $('.bx-carousel').bxSlider({
        prevText: "",
        nextText: "",
        pagerCustom: '#bx-pager',
        onSliderLoad: function () {
            console.log('load');
        },
        onSlideNext: function () {
            sliderBg.goToNextSlide();
        },
        onSlidePrev: function () {
            sliderBg.goToPrevSlide();
        },
    });

    $('#bx-pager > a').click(function () {
        var idx = $(this).data('slide-index');
        sliderBg.reloadSlider({
            startSlide: idx,
             slideWidth: ($(window).width() / 2),
        minSlides: 2,
        maxSlides: 2,
        pager: false,
        controls: false
        });
    });

});

$(function () {
    $(document).click(function (event) {
        if ($(event.target).closest("nav > div > ul").length)
            return;
        $("nav .bg").hide();
        $('.upline').hide();
        event.stopPropagation();
    });
});