'use strict';

$(function() {

    //settings for slider
    var width = 633;
    var animationSpeed = 1000;
    var pause = 5000;
    var currentSlide = 1;

    //cache DOM elements
     var $slider = $('#galleryslider21');
    var $slideContainer = $('.galleryslides21', $slider);
    var $slides = $('.galleryslide21', $slider);
    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});