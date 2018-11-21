import $ from 'jquery';
import {slick} from 'slick-carousel';

$(document).ready(function () {
    $('.programs__body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.programs__tabs',
        swipe: false,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.programs__tabs').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.programs__body',
        focusOnSelect: true,
        touchThreshold: 10,
        prevArrow: `<button type="button" class="programs__tabs-control programs__tabs-control-prev slick-prev"></button>`,
        nextArrow: `<button type="button" class="programs__tabs-control programs__tabs-control-next slick-next"></button>`,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                }
            },
        ]
    });
});