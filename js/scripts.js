$('.btn').click(function () {
    console.log("TESTTESTTEST");
    var currentSlide = $('.slide.active');
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(1000).removeClass('active');
    nextSlide.fadeIn(1000).addClass('active');

})