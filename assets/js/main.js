new hoverEffect({
    parent: document.querySelector('.home__img'),
    intensity: 0.3,
    image1: 'assets/img/labura.jpg',
    image2: 'assets/img/labura red.jpg',
    displacementImage: 'assets/img/diss.png',
    imagesRatio: 450 / 300
})

/* NAV, TITLE Y IMG y*/
gsap.from('.nav', {opacity: 0, duration: 1, delay:1, y: -30})
gsap.from('.home__title', {opacity: 0, duration: 1.2, delay:1.2, y: -30})
gsap.from('.home__img', {opacity: 0, duration: 1.3, delay:1.3, y: -50})

/*SOCIAL, SUBTITLE Y BUTTON*/
gsap.from('.home__social', {opacity: 0, duration: 1, delay:1.5, y: 50})
gsap.from('.home__subtitle', {opacity: 0, duration: 1, delay: 1.8, y: 50})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2, y: 50})