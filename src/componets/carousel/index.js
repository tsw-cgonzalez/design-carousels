
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const Carousel = {
  init() {
    this.carouselEle = Array.from(document.querySelectorAll('.swiper__columns'))
    this.carouselEle.map((el) => {
      this.renderCarousel(el)
    })
  },
  renderCarousel(el) {
    this.carousel = new Swiper(el, {
      loop: true,
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

export const CarouselAuto = {
  init() {
    this.carouselEle = Array.from(document.querySelectorAll('.swiper__auto'))
    this.carouselEle.map((el) => {
      this.renderCarousel(el)
    })
  },
  renderCarousel(el) {
    this.carousel = new Swiper(el, {
      allowTouchMove: true,
      autoplay: true,
      delay: 100,
      loop: true,
      pauseOnMouseEnter: true,
      slidesPerView: "auto",
      speed: 1000,
      waitForTransition: true,
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
export const CarouselOverflow = {
  init() {
    this.carouselEle = Array.from(document.querySelectorAll('.swiper__overflow'))
    this.carouselEle.map((el) => {
      this.renderCarousel(el)
    })
  },
  renderCarousel(el) {
    this.carousel = new Swiper(el, {
      allowTouchMove: true,
      autoplay: true,
      delay: 100,      
      loop: true,
      pauseOnMouseEnter: true,
      slidesPerView: 'auto',
      speed: 700,
      waitForTransition: true,
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
export const CarouselShadowBox = {
  init() {
    this.carouselEle = Array.from(document.querySelectorAll('.swiper__shadow-box'))
    
    this.carouselEle.map((el) => {
      this.renderCarousel(el)
    })
  },
  renderCarousel(el) {
    this.carousel = new Swiper(el, {
      allowTouchMove: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
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
         console.log("shadow box inited")
        }
      }
    })
  }
}