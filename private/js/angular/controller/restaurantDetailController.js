myApp.controller('restaurantDetailController', function ($scope, $routeParams, $http, $timeout) {
    var restaurant = $routeParams.restaurant;
    $http.get(URL + '/restaurants?id=' + restaurant)
        .then(function (response) {
            $scope.data = response.data[0];
            $scope.data.websiteFormatted = $scope.data.website;
           if ($scope.data.websiteFormatted.startsWith('http://')) {
               $scope.data.websiteFormatted = $scope.data.websiteFormatted.substring(7)

           }
           else if( $scope.data.websiteFormatted.startsWith('https://')) {
               $scope.data.websiteFormatted = $scope.data.websiteFormatted.substring(8)
           }
            if ($scope.data.websiteFormatted.endsWith('/')) {
                $scope.data.websiteFormatted = $scope.data.websiteFormatted.substring(0, $scope.data.websiteFormatted.length-1 )

            }
            if ($scope.data.websiteFormatted.length > 13) {
                $scope.data.websiteFormatted = "Website"

            }
        })

    $http.get(URL + '/menus?restaurant=' + restaurant)
        .then(function (response) {
            $scope.menu = response.data[0];
        })

    $scope.slider = {
        current: 0,
        images: [
            {path: 'assets/imgs/food_background.jpg'},
            {path: 'assets/imgs/start_background.jpg'}
        ]
    }
    $scope.dayslider = {
        current: 0,
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
    $scope.daysliderBack = function() {
        if ($scope.dayslider.current == 0){
            $scope.dayslider.current = $scope.dayslider.days.length - 1
        }
        else {
            $scope.dayslider.current--
        }
    }
    $scope.daysliderForward = function() {
        if ($scope.dayslider.current == $scope.dayslider.days.length - 1){
            $scope.dayslider.current = 0
        }
        else {
            $scope.dayslider.current++
        }
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
    ]};

    $scope.options = [
        {icon: 'local_parking'},
        {icon: 'pets'},
        {icon: 'credit_card'}
    ]

});