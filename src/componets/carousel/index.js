
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const Carousel = {
  init() {
    this.carouselEle = Array.from(document.querySelectorAll('.swiper__card-deck'))
    this.carouselEle.map((el) => {
      this.renderCarousel(el)
    })
  },
  renderCarousel(el) {
    this.carousel = new Swiper(el, {
      loop: true,
      // spaceBetween: 24,
      navigation: {
        enabled: false,
        nextEl: 'swiper-button-next2',
        prevEl: 'swiper-button-prev2',
      },
      allowTouchMove: true,
      slidesPerView: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: () => {
         console.log("inited")
        }
      }
    })
  }
}