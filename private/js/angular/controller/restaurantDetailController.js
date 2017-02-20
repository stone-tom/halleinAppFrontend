myApp.controller('restaurantDetailController', function ($scope, $timeout) {
    $scope.slider = {
        current: 0,
        images: [
            {path: 'assets/imgs/food_background.jpg'},
            {path: 'assets/imgs/start_background.jpg'}
        ]
    }

    var countUp = function () {
        if ($scope.slider.current == $scope.slider.images.length - 1) {
            $scope.slider.current = 0;
        }
        else {
            $scope.slider.current++;
        }
        $timeout(countUp, 5000);
    }

    $timeout(countUp, 5000);

    $scope.tabswitcher = {
        active: 0,
    tabs: [
        {icon: 'arrow_back', link: 'food'},
        {icon: 'info_outline', template: 'restaurantDetail/general.html'},
        {icon: 'restaurant', template: 'restaurantDetail/menus.html'},
        {icon: 'map', template: 'restaurantDetail/location.html'},
        {icon: 'star_border', template: 'restaurantDetail/feedback.html'},
    ]};
});