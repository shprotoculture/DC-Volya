import $ from 'jquery';

$(document).ready(function () {

    $(window).on('scroll', function () {
        let winST = $(this).scrollTop();
        $('.planet').css({'transform': `translate3d(0, -${winST/2}px, 0)`});
    });


});