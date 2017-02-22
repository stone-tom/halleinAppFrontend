myApp.controller('restaurantDetailController', function ($scope, $routeParams, $http, $timeout) {
    var restaurant = $routeParams.restaurant;
    $http.get(URL + '/restaurants?id=' + restaurant)
        .then(function (response) {
            $scope.data = response.data[0];
        })

    var today = new Date();
    var weekday = today.getDay() - 1;
    getMenu();
    function getMenu() {
        var data = {
            restaurant: restaurant,
            date: dateToString(today)
        }
        $http({
            url: URL + '/menus',
            method: 'GET',
            params: data
        }).then(function (response) {
            $scope.menu = response.data[0];
        }, function() {
            delete $scope.menu;
        });
    }

    $scope.slider = {
        current: 0,
        images: [
            {path: 'assets/imgs/food_background.jpg'},
            {path: 'assets/imgs/start_background.jpg'}
        ]
    }
    $scope.dayslider = {
        current: weekday,
        days: [
            'montag',
            'dienstag',
            'mittwoch',
            'donnerstag',
            'freitag',
            'samstag',
            'sonntag'
        ]
    }
    $scope.daysliderBack = function () {
        if ($scope.dayslider.current == 0) {
            $scope.dayslider.current = $scope.dayslider.days.length - 1;
            today.setDate(today.getDate() + 6);
        }
        else {
            $scope.dayslider.current--
            today.setDate(today.getDate() - 1);
        }
        console.log(today);
        getMenu();
    }
    $scope.daysliderForward = function () {
        if ($scope.dayslider.current == $scope.dayslider.days.length - 1) {
            $scope.dayslider.current = 0;
            today.setDate(today.getDate() - 6);
        }
        else {
            $scope.dayslider.current++;
            today.setDate(today.getDate() + 1);
        }
        console.log(today);
        getMenu();
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
            {icon: 'info_outline', template: 'restaurantDetail/general.html'},
            {icon: 'restaurant', template: 'restaurantDetail/menus.html'},
            {icon: 'map', template: 'restaurantDetail/location.html'},
            {icon: 'star_border', template: 'restaurantDetail/feedback.html'},
        ]
    };

    $scope.options = [
        {icon: 'local_parking'},
        {icon: 'pets'},
        {icon: 'credit_card'}
    ]
});