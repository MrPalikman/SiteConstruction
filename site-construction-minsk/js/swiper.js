// import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';


const swiper = new Swiper(".swiper", {
  zoom: true,
  // preventClicks: true,
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 3,
  //autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,   
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  hideOnClick : false,
  on: {
    init() {
      this.el.addEventListener('click', () => {
        this.autoplay.stop( );
      });
      
         
      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }}
   
  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });