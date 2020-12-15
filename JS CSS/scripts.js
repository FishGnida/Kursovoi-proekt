var xml="<?xml version = '1.0'?>"+
"<head> Universalis bestiary</head>"
parser = new DOMParser();
xmlDoc = parser.parseFromString(xml,"text/xml");
var names = xmlDoc.getElementsByTagName("head");
var title = document.getElementsByTagName("title");
title[0].innerHTML=names[0].innerHTML;  
/* ������ ������ �� ��������� */
var slideIndex = 1;
showSlides(slideIndex);

/* ������� ����������� ������ �� 1, ���������� �������� �����*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* ������� ��������� ������ �� 1, ���������� ���������� �����*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* ������������� ������� ����� */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* �������� ������� �������� */
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