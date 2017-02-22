myApp.controller('mainController', function ($scope, $location) {
    $scope.onSwipeRight = function (direction, url) {
        $scope.viewAnimationDirection = direction;
        $location.path(url);
    }
});