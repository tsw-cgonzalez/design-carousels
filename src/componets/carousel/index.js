
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

export const CarouselAuto = {
  init() {
    this.carouselEle = Array.from(document.querySelectorAll('.swiper__auto'))
    this.carouselEle.map((el) => {
      this.renderCarousel(el)
    })
  },
  renderCarousel(el) {
    this.carousel = new Swiper(el, {
      loop: true,
      delay: 100,
      speed: 250,
      pauseOnMouseEnter: true,
      waitForTransition: true,
      autoplay: true,
      navigation: {
        enabled: false,
        nextEl: 'swiper-button-next2',
        prevEl: 'swiper-button-prev2',
      },
      allowTouchMove: true,
      slidesPerView: "auto",
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //   },
      //   1400: {
      //     slidesPerView: 4,
      //   }
      // },
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
      loop: true,
      slidesPerView: 'auto',
      delay: 200,
      speed: 350,
      pauseOnMouseEnter: true,
      waitForTransition: true,
      autoplay: true,
      navigation: {
        enabled: false,
        nextEl: 'swiper-button-next2',
        prevEl: 'swiper-button-prev2',
      },
      allowTouchMove: true,
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //   },
      //   1400: {
      //     slidesPerView: 4,
      //   }
      // },
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


export const CarouselOverflowCenter  = {
  init() {
    this.carouselEle = Array.from(document.querySelectorAll('.swiper__overflowCenter'))
    this.carouselEle.map((el) => {
      this.renderCarousel(el)
    })
  },
  renderCarousel(el) {
    this.carousel = new Swiper(el, {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      navigation: {
        enabled: false,
        nextEl: 'swiper-button-next2',
        prevEl: 'swiper-button-prev2',
      },
      allowTouchMove: true,
      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //   },
      //   1400: {
      //     slidesPerView: 4,
      //   }
      // },
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