myApp.controller('homeController', function ($scope) {
    var swiperStartHorizontal = new Swiper ('.swiper-container-start-horizontal', {
        direction: 'horizontal',
        allowSwipeToPrev: true
    })
    var swiperStartVertical = new Swiper ('.swiper-container-start-vertical', {
        direction: 'vertical'
    })
    var swiperFoodVertical = new Swiper ('.swiper-container-food-vertical', {
        direction: 'vertical',
        initialSlide: 1,
        touchReleaseOnEdges: true
    })
    swiperStartHorizontal.on('slideChangeStart', function () {
        var currentSlide = swiperStartHorizontal.realIndex;
        switch(currentSlide) {
            case 1:
                swiperStartHorizontal.lockSwipeToNext();
                break;
            default:
                swiperStartHorizontal.unlockSwipeToNext();
        }
    });
    swiperFoodVertical.on('slideChangeStart', function () {
        var currentSlide = swiperFoodVertical.realIndex;
        switch(currentSlide) {
            case 0:
                swiperStartHorizontal.lockSwipeToPrev();
                swiperStartHorizontal.lockSwipeToNext();
                break;
            case 2:
                swiperStartHorizontal.lockSwipeToPrev();
                swiperStartHorizontal.lockSwipeToNext();
                break;
            default:
                swiperStartHorizontal.unlockSwipeToPrev();
        }
    });
    swiperStartVertical.on('slideChangeStart', function () {
        var currentSlide = swiperStartVertical.realIndex;
        switch(currentSlide) {
            case 1:
                swiperStartHorizontal.lockSwipeToPrev();
                swiperStartHorizontal.lockSwipeToNext();
                swiperStartVertical.lockSwipeToNext();
                break;
            default:
                swiperStartHorizontal.unlockSwipeToPrev();
                swiperStartHorizontal.unlockSwipeToNext();
                swiperStartVertical.unlockSwipeToNext();
        }
    });
});