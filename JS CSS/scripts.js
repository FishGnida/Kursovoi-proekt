var xml="<?xml version = '1.0'?>"+
"<head> Universalis bestiary</head>"
parser = new DOMParser();
xmlDoc = parser.parseFromString(xml,"text/xml");
var names = xmlDoc.getElementsByTagName("head");
var title = document.getElementsByTagName("title");
title[0].innerHTML=names[0].innerHTML;  
/* »ндекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* ‘ункци€ увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* ‘ункци€ уменьш€ет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* ”станавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* ќсновна€ функци€ слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}