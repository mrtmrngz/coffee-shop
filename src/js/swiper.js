const ourProductsSliderDOM = document.querySelector('.home-page-product-slider-1')
const bestSellingsSliderDOM = document.querySelector('.home-page-product-slider-2')


function ourProductsSlider() {
    new Swiper('.home-page-product-slider-1', {
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        draggable: true,
        loop: true,
        navigation: {
            nextEl: '.our-products-next-btn',
            prevEl: '.our-products-prev-btn'
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            996: {
                slidesPerView: 4,
                spaceBetween: 29
            }
        }
    })
}

ourProductsSliderDOM && ourProductsSlider()

function bestSellingsSlider() {
    new Swiper('.home-page-product-slider-2', {
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        draggable: true,
        loop: true,
        navigation: {
            nextEl: '.best-selling-next-btn',
            prevEl: '.best-selling-prev-btn'
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            996: {
                slidesPerView: 4,
                spaceBetween: 29
            }
        }
    })
}

bestSellingsSliderDOM && bestSellingsSlider()