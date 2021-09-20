function slider() {
    var swiper = new Swiper('.result .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlidesBounds: true,
        pagination: {
            el: '.result .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlidesBounds: false,

            },
            480: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 0
            },
        }
    })
}

$(document).ready(function() {
    slider()

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".nav").slideToggle()
    })

    $(".nav__item").click(function(event) {
        event.preventDefault();
        var idc = $(this).attr('href'),
            top = $(idc).offset().top;
        $('body,html').animate({ scrollTop: top - 165 }, 500);
        if ($(window).innerWidth() < 992) {
            $(".nav").hide()
        }
    });
    // $(window).scroll(function() {
    //     var $sections = $('section');
    //     $sections.each(function(i, el) {
    //         var top = $(el).offset().top - 165;
    //         var bottom = top + $(el).height();
    //         var scroll = $(window).scrollTop();
    //         var idn = $(el).attr('id');
    //         if (scroll > top && scroll < bottom) {
    //             $('a.nav__item--active').removeClass('nav__item--active');
    //             $('a[href="#' + idn + '"]').addClass('nav__item--active');
    //         }
    //     });
    // });
})