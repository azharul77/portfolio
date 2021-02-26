$(document).ready(function(){
    $('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots',
    });

    let hamburger = document.querySelector('.hamburger');
    let cancel = document.querySelector('.cancel');
    let mobileNav = document.querySelector('.mobile-nav');
    let manue = document.querySelector('.manue');

    hamburger.addEventListener('click', function(){
            mobileNav.classList.add('open');
        });

    cancel.addEventListener('click', function(){
            mobileNav.classList.remove('open');
    });

    manue.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })
});