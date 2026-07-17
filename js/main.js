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


// Cторінка каталогу
const sidebar = document.querySelector('.catalog-sidebar');
const toggle = document.querySelector('.catalog-sidebar__toggle');

if (sidebar && toggle) {

    toggle.addEventListener('click', () => {

        sidebar.classList.toggle('is-open');

    });

}

const media = window.matchMedia('(min-width: 993px)');

function resetSidebar() {

    if (media.matches) {
        sidebar.classList.remove('is-open');
    }

}

media.addEventListener('change', resetSidebar);


// Вкладки на сторінці товару
const tabs = document.querySelectorAll('.product-tabs__btn');
const contents = document.querySelectorAll('.product-tab');

tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {

        tabs.forEach(btn => btn.classList.remove('active'));
        contents.forEach(item => item.classList.remove('active'));

        tab.classList.add('active');
        contents[index].classList.add('active');

    });

});