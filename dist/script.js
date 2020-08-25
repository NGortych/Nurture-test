$(document).ready(function () {

    var $status = $('.slides-number');
    var $slickElement = $('.slider-element');


    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        infinite: true,
        accessibility: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });
});