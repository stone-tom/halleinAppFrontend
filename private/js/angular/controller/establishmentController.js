myApp.controller('establishmentController', function ($scope, $cordovaPreferences) {
    $scope.sexes = {
        options: [
            {name: 'MÄNNLICH'},
            {name: 'WEIBLICH'}]
    }
    $scope.input = {};

    $scope.save = function () {
            $scope.input.sex = $scope.sexes.active;
        $scope.input.notifications = true;
            $cordovaPreferences.store('general', $scope.input);
    }
});