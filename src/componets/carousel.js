
import './carousel.scss'
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
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1200: {
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
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
        init: () => {
         console.log("inited")
        }
      }
    })
  }
}

// export const Carousel2 = {
//   init() {
//     this.carouselEle = Array.from(document.querySelectorAll('.swiper-test'))
//     this.renderCarousel()
//   },
//   renderCarousel() {
//     this.carousel = new Swiper('.swiper-test', {
//       loop: true,
//       spaceBetween: 24,
//       allowTouchMove: true,
//       slidesPerView: 4,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
//       on: {
//         init: () => {
//           setTimeout(() => {
//             const cards = this.carouselEle[0].querySelectorAll('.cards')
//             cards.forEach((e) => {
//               e.classList.remove('cards-animate')
//             })
//           },2000)
//         }
//       }
//     })
//   }
// }


// export const ProgressCarousel = {
//   init() {
//     this.carouselEle = Array.from(document.querySelectorAll('.swiper-progress'))
//     this.renderCarousel()
//   },
//   renderCarousel() {
//     this.carousel = new Swiper('.swiper-progress', {
//       loop: true,
//       // slidesPerView: 3,
//       // initialSlide: 1,
//       cssMode: true,
//       centeredSlides: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         type: "progressbar",
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
//     })
//   }
// }