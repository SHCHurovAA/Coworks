/* Tiny slider */

const slider = tns({
    container: '.slider',

    items: 2.7,
    gutter: 10,
    mouseDrag: true,
    speed: 400,
    // loop: false, // ломает lazyload

    autoWidth: true,
    lazyload: true,
    swipeAngle: false,

    autoplay: true,
    autoplayButtonOutput: false,

    controlsContainer: '.location__controls',
    nav: false,
});


const prevMobile = document.querySelector('.location__controls--mobile .prev');
const nextMobile = document.querySelector('.location__controls--mobile .next');

prevMobile.onclick = () => slider.goTo('prev');
nextMobile.onclick = () => slider.goTo('next');