var myApp = angular.module('myApp', ['ngRoute', 'ngTouch', 'ngAnimate', 'swipe']);

var URL = 'http://46.38.236.5:443';

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'content/home.html',
            controller: 'homeController',
        })
        .when('/interests', {
            templateUrl: 'content/interests.html',
            controller: 'interestsController',
        })
        .when('/newsletter', {
            templateUrl: 'content/newsletter.html',
            controller: 'newsletterController',
        })
        .when('/food', {
            templateUrl: 'content/food.html',
            controller: 'foodController',
        })
        .when('/food/restaurants', {
            templateUrl: 'content/food-restaurants.html',
            controller: 'foodRestaurantsController',
        })
        .when('/food/feedback', {
            templateUrl: 'content/food-feedback.html',
            controller: 'foodFeedbackController',
        })
        .when('/start', {
            templateUrl: 'content/start.html',
            controller: 'startController',
        })
        .when('/food/restaurants/detail/:restaurant', {
            templateUrl: 'content/restaurantDetail.html',
            controller: 'restaurantDetailController',
        })
        .when('/establishment', {
            templateUrl: 'content/establishment.html',
            controller: 'establishmentController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            }
        })
        .when('/settings', {
            templateUrl: 'content/settings.html',
            controller: 'settingsController',
        })
        .otherwise({
            redirectTo: "/"
        });
});