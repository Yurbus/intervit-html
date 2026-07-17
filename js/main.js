document.addEventListener('DOMContentLoaded', () => {

    initBurger();

});

function initBurger() {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header__nav');

    if (!burger || !nav) return;

    burger.addEventListener('click', () => {

        burger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');

    });

    document.addEventListener('click', (e) => {

        if (
            !nav.contains(e.target) &&
            !burger.contains(e.target)
        ) {

            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');

        }

    });

    document.addEventListener('keydown', (e) => {

        if (e.key === 'Escape') {

            burger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');

        }

    });

}

// const header = document.querySelector('.header');

// window.addEventListener('scroll', () => {

//     if (window.scrollY > 80) {
//         header.classList.add('header--fixed');
//     } else {
//         header.classList.remove('header--fixed');
//     }

// });