myApp.controller('restaurantDetailController', function ($scope, $routeParams, $http, $timeout) {
    var swiperTabs = new Swiper ('.swiper-container-tabs', {
        direction: 'horizontal'
    })
    var today = new Date();
    var weekday = today.getDay();
    var swiperMenus = new Swiper ('.swiper-container-menus', {
        direction: 'horizontal',
        loop: true,
        initialSlide: weekday
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
    $scope.daySlider = {
        current: weekday,
        days: [
            'sonntag',
            'montag',
            'dienstag',
            'mittwoch',
            'donnerstag',
            'freitag',
            'samstag'
        ]
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

    $scope.tabSwitcher = {
        active: 0,
        tabs: [
            {icon: 'info_outline', link: '#general'},
            {icon: 'restaurant', link: '#menus'},
            {icon: 'map', link: '#location'},
            {icon: 'star_border', link: '#feedback'},
        ]
    };

    $scope.options = [
        {icon: 'local_parking'},
        {icon: 'pets'},
        {icon: 'credit_card'}
    ]

    $scope.tabGoTo = function(index){
        swiperTabs.slideTo(index);
        $scope.tabSwitcher.active = index;
    }

    swiperTabs.on('onSlideChangeStart', function () {
        var currentSlide = swiperTabs.realIndex;
        $scope.tabSwitcher.active = currentSlide;
        $('.tab').removeClass('active');
        $('.tab').eq(currentSlide).addClass('active');
    });

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