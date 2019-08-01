var choseName = true, choseBirth = null;
var resultNum;

function reduceDigits(n){
    var strNum = "" + n;
    if (n < 10 || n === 11 || n === 22 || n === 33){
        return (n);
    }
    while(strNum.length > 1 && strNum !== "11" && strNum !== "22" && strNum !== "33") {
        var sum = 0;
        for(var i = 0; i < strNum.length; i++) {
            sum += parseInt(strNum[i]);
        }
        strNum = "" + sum;
     }
    return(parseInt(strNum));
}
//calculates the number based on name
function findNameNumber() {
    var myName = $("input[name='fullname']").val().toLowerCase();
    var sum = 0;
    for (var i = 0; i < myName.length; i++) {
        if (myName[i] === "a" || myName[i] === "j" || myName[i] === "s") {
            sum += 1;
        } else if (myName[i] === "b" || myName[i] === "k" || myName[i] === "t") {
            sum += 2;
        } else if (myName[i] === "c" || myName[i] === "l" || myName[i] === "u") {
            sum += 3;
        } else if (myName[i] === "d" || myName[i] === "m" || myName[i] === "v") {
            sum += 4;
        } else if (myName[i] === "e" || myName[i] === "n" || myName[i] === "w") {
            sum += 5;
        } else if (myName[i] === "f" || myName[i] === "o" || myName[i] === "x") {
            sum += 6;
        } else if (myName[i] === "g" || myName[i] === "p" || myName[i] === "y") {
            sum += 7;
        } else if (myName[i] === "h" || myName[i] === "q" || myName[i] === "z") {
            sum += 8;
        } else if (myName[i] === "i" || myName[i] === "r") {
            sum += 9;
        } else {
            continue;
        }
    }
    sum = reduceDigits(sum);
    //display in results span
    $('#showNumber').html(sum);
}




// click on next/done/retry button and going to respective slides
$('.btn').click(function () {
    var currentSlide = $('.slide.active');
    var nextSlide;

    if (currentSlide.hasClass("result")) {
        nextSlide = $('.slide.start');
    } else if (currentSlide.hasClass("birth")) {
        nextSlide = $('.slide.result');
        // insert function to calculate number
    } else if (currentSlide.hasClass("name")) {
        nextSlide = $('.slide.result');
        findNameNumber();
    } else if (currentSlide.hasClass("choices") && choseName) {
        nextSlide = $('.slide.name');
    } else if (currentSlide.hasClass("choices") && !choseName) {
        nextSlide = $('.slide.birth');
    } else {
        nextSlide = currentSlide.next();
    }

    nextSlide.fadeIn(1200).addClass('active');
    currentSlide.fadeOut(350).removeClass('active');



})

$('.previous').click(function () {
    var currentSlide = $('.slide.active');
    var prevSlide = currentSlide.prev();

    prevSlide.fadeIn(1500).addClass('active');
    currentSlide.fadeOut(300).removeClass('active');
})