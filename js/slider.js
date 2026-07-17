const galleryThumbs = new Swiper(".gallery-thumbs", {

    slidesPerView: 4,

    spaceBetween: 15,

    watchSlidesProgress: true,

    navigation: {

        nextEl: ".gallery-next",
        prevEl: ".gallery-prev"

    },

    breakpoints: {

        0: {

            slidesPerView: 3

        },

        576: {

            slidesPerView: 4

        }

    }

});


const galleryMain = new Swiper(".gallery-main", {

    spaceBetween: 10,

    effect: "fade",

    speed: 500,

    thumbs: {

        swiper: galleryThumbs

    }

});


Fancybox.bind("[data-fancybox='product-gallery']", {

    Toolbar: {

        display: {

            left: [],

            middle: [

                "zoomIn",
                "zoomOut",
                "toggle1to1"

            ],

            right: [

                "close"

            ]

        }

    },

    Images: {

        zoom: true

    },

    animated: true,

    dragToClose: false,

    placeFocusBack: false

});