import Swiper, { Navigation } from 'swiper';


document.addEventListener('DOMContentLoaded', function () {
    if(document.querySelector(".baner-slider")){
        document.querySelectorAll(".baner-slider").forEach(item => {                                             
            new Swiper(item, {
                modules: [ Navigation ],
                spaceBetween: 10,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.baner-slider-next',
                    prevEl: '.baner-slider-prev',
                },                 
                watchSlidesVisibility: true,
                slideActiveClass: "active",
                allowTouchMove: true,                
            })
        })
    }
    if(document.querySelector(".slider-4")){
        document.querySelectorAll(".slider-4").forEach(item => {
            let currentCategory = item.dataset.category;
            let navigation = {};            
            let currentNavigation = document.querySelector(`.slider-navigation-4[data-category="${currentCategory}"]`);          
            let next = currentNavigation.querySelector('.slider-next');
            let prev = currentNavigation.querySelector('.slider-prev');            
            navigation = {
                nextEl: next,
                prevEl: prev,
            }            
            new Swiper(item, {
                modules: [ Navigation ],
                spaceBetween: 10,
                slidesPerView: 'auto',
                navigation: navigation,                
                watchSlidesVisibility: true,
                slideActiveClass: "active",
                allowTouchMove: true,
                breakpoints: {
                    768: {                        
                        spaceBetween: 20,
                        slidesPerView: 2,                          
                    },
                    992: {
                        spaceBetween: 20,
                        slidesPerView: 3,    
                    },
                    1200: {                        
                        spaceBetween: 20,
                        slidesPerView: 4,    
                    },
                    1424: {
                        spaceBetween: 30,
                        slidesPerView: 4   
                    }
                }               
            })
        })
    }
    if(document.querySelector(".slider-2")){
        document.querySelectorAll(".slider-2").forEach(item => {
            let currentCategory = item.dataset.category;
            let navigation = {};            
            let currentNavigation = document.querySelector(`.slider-navigation-2[data-category="${currentCategory}"]`);          
            let next = currentNavigation.querySelector('.slider-next');
            let prev = currentNavigation.querySelector('.slider-prev');            
            navigation = {
                nextEl: next,
                prevEl: prev,
            }            
            new Swiper(item, {
                modules: [ Navigation ],
                spaceBetween: 10,
                slidesPerView: 'auto',
                navigation: navigation,                
                watchSlidesVisibility: true,
                slideActiveClass: "active",
                allowTouchMove: true,
                breakpoints: { 
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },                 
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,    
                    },
                    1424: {
                        slidesPerView: 2,
                        spaceBetween: 30,    
                    }
                }                    
            })
        })
    }    
})

