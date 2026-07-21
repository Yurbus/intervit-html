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


// ------- Section about прокрутка чисел ---------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const statsBlock = document.getElementById('stats');
    const stats = document.querySelectorAll('.stat');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const line = stat.querySelector('.line');
                    const number = stat.querySelector('.number');
                    const target = +number.getAttribute('data-target');
                    stat.classList.add('visible');
                    line.classList.add('visible');
                    scrollToTarget(number, target);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsBlock);

    function scrollToTarget(element, target) {
        let start = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / 100;
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.round(start);
            if (start >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, stepTime);
    }
});

// ------- Модальне вікно для пошуку ---------------------------------------
const searchBtn = document.querySelector('.header__search');
const searchModal = document.querySelector('.search-modal');
const searchClose = document.querySelector('.search-modal__close');
const searchOverlay = document.querySelector('.search-modal__overlay');
const searchInput = document.querySelector('.search-modal input');

function openSearch() {

    searchModal.classList.add('active');
    document.body.classList.add('lock');

    setTimeout(() => {

        searchInput.focus();

    }, 200);

}

function closeSearch() {

    searchModal.classList.remove('active');
    document.body.classList.remove('lock');

}

searchBtn.addEventListener('click', openSearch);

searchClose.addEventListener('click', closeSearch);

searchOverlay.addEventListener('click', closeSearch);

document.addEventListener('keydown', function(e){

    if(e.key === 'Escape'){

        closeSearch();

    }

});