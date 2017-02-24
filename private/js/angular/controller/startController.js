myApp.controller('startController', function ($scope) {
    new Swiper ('.swiper-container-horizontal', {
        // Optional parameters
        direction: 'horizontal'
    })
    new Swiper ('.swiper-container-vertical', {
        // Optional parameters
        direction: 'vertical',
        initialSlide: 1
    })
});