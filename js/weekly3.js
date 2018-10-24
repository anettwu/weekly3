// hamburger menu toggle
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

// scroll to the section, when the menu is clicked
$('.nav__link').on('click', function () {
    const clickMenu = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(clickMenu).offset().top
    }, 2000);
});

// button .up scrolling page to top
const $up = $('.up')
$up.on('click', function () {
    $('body, html').animate({
        scrollTop: $('body').offset().top
    }, 2000);
});

// show and hide button .up while scrolling
$(window).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(window).scrollTop();
    if (scrollValue > 0) {
        $up.addClass('active');
    } else {
        $up.removeClass('active')
    }
});