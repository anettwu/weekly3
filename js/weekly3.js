// hamburger menu toggle
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const changeNav = () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
}

burger.addEventListener('click', () => changeNav());

// scroll to the section, when the menu is clicked
$('.nav__link').on('click', function () {
    const clickMenu = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(clickMenu).offset().top
    }, 1000);
    changeNav()
});

// button .up scrolling page to top
const $up = $('.up')
$up.on('click', function () {
    $('body, html').animate({
        scrollTop: $('body').offset().top
    }, 1000);
});

// show and hide button .up while scrolling
$(window).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(window).scrollTop();
    return (scrollValue > 0) ? $up.addClass('active') : $up.removeClass('active')
});