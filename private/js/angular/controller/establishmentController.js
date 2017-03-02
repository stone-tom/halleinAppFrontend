myApp.controller('establishmentController', function ($scope, $cordovaPreferences) {
    $scope.sexes = {
        options: [
            {name: 'MÄNNLICH'},
            {name: 'WEIBLICH'}]
    }
    $scope.input = {};

    $scope.save = function () {
        if (Number.isInteger($scope.sexes.active) && $scope.input.birthday) {
            $scope.input.sex = $scope.sexes.active;
            $scope.input.notifications = true;
            $cordovaPreferences.store('general', $scope.input).then(function () {
                slide('#/interests');
            });
        }
    }
});