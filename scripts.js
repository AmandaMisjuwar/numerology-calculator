$('.btn').click(function () {
    console.log("TESTTESTTEST");
    var currentSlide = $('.slide.active');
    var nextSlide = currentSlide.next();

    nextSlide.fadeIn(1500).addClass('active');
    currentSlide.fadeOut(350).removeClass('active');
    

})