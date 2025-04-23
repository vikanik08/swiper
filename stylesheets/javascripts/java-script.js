import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


document.addEventListener('DOMContentLoaded', function() {
    
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
      
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        slidesPerView: 2.5,
        spaceBetween: 30, 
        centeredSlides: true,

        keyboard: { 
            enabled: true, 
            onlyInViewport: true,
            pageUpDown: true,
        },

        // mousewheel: {  
        //     sensitivity: 1, 
        //     eventsTarget: ".image-slider"
        // }
    });
});