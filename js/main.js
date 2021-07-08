$(function() {
    $('.fairy-tail__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="images/arrow-prew.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        responsive: [{
            breakpoint: 601,
            settings: {
                arrows: false
            }
        }, ]
    });
    $(' .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="images/arrow-prew.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 601,
            settings: {
                arrows: false
            }
        }, ]
    });

});