myApp.controller('homeController', function ($scope) {
    var swiperStartHorizontal = new Swiper ('.swiper-container-start-horizontal', {
        direction: 'horizontal',
    })
    var swiperStartVertical = new Swiper ('.swiper-container-start-vertical', {
        direction: 'vertical'
    })
    var swiperFoodVertical = new Swiper ('.swiper-container-food-vertical', {
        direction: 'vertical',
        initialSlide: 1
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
                swiperFoodVertical.lockSwipeToPrev();
                break;
            case 2:
                swiperStartHorizontal.lockSwipeToPrev();
                swiperStartHorizontal.lockSwipeToNext();
                swiperFoodVertical.lockSwipeToNext();
                break;
            default:
                swiperStartHorizontal.unlockSwipeToPrev();
                swiperFoodVertical.unlockSwipeToPrev();
                swiperFoodVertical.unlockSwipeToNext();
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
    $scope.exitSettings = function() {
        swiperStartVertical.slideTo(0);
    }
});