myApp.controller('mainController', function ($scope, $location) {
    $scope.slide = function(href, direction){
        slide(href, direction);
    }
});