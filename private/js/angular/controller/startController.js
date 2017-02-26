myApp.controller('startController', function ($scope) {
    new Swiper ('.swiper-container-start-horizontal', {
        // Optional parameters
        direction: 'horizontal'
    })
   new Swiper ('.swiper-container-start-vertical', {
        // Optional parameters
        direction: 'vertical',
       spaceBetween: -550
    })
    new Swiper ('.swiper-container-food-vertical', {
        // Optional parameters
        direction: 'vertical',
        initialSlide: 2,
    })
});