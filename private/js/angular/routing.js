var myApp = angular.module('myApp', ['ngRoute']);

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
        .when('/food/feedback', {
            templateUrl: 'content/food-feedback.html',
            controller: 'foodFeedbackController',
        })
        .when('/start', {
            templateUrl: 'content/start.html',
            controller: 'startController',
        })
        .when('/establishment', {
            templateUrl: 'content/establishment.html',
            controller: 'establishmentController',
        })
        .otherwise({
            redirectTo: "/"
        });
});