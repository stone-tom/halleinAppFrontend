myApp.controller('restaurantDetailController', function ($scope, $routeParams, $http, $timeout) {
    new Swiper ('.swiper-container-tabs', {
        // Optional parameters
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationType: 'progress'
    })

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
            if ($scope.data.websiteFormatted.length > 14) {
                $scope.data.websiteFormatted = "Website"

            }
        })

    getFeedback();

    function getFeedback() {
        $http.get(URL + '/feedback?orderBy=-created&restaurant=' + restaurant + '&status=2')
            .then(function (response) {
                $scope.bubbles = response.data;
            })
    }

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
            {path: 'assets/imgs/local1.jpg'},
            {path: 'assets/imgs/local2.jpg'},
            {path: 'assets/imgs/local3.jpg'}
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
        $timeout(countUp, 3000);
    }

    $timeout(countUp, 3000);

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

    $scope.giveFeedback = function() {
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            navigator.notification.prompt(
                '',  // message
                onPrompt,                  // callback to invoke
                'Feedback geben',            // title
                ['Senden','Abbrechen'],             // buttonLabels
                ''                 // defaultText
            );
        }
        function onPrompt(results){
            var text = results.input1;
            var data = {
                restaurant: 2,
                rating: 5,
                text: text
            }
            $http({
                url: URL + '/feedback',
                method: 'POST',
                params: data
            }).then(function () {
                getFeedback();
            });
        }
    }
});