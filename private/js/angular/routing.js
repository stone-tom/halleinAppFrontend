var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'content/home.html',
            controller: 'homeController',
        })
        .when('/food', {
            templateUrl: 'content/food.html',
            controller: 'foodController',
        })
        .when('/interests', {
            templateUrl: 'content/interests.html',
            controller: 'interestsController',
        })
        .otherwise({
            redirectTo: "/"
        });
});