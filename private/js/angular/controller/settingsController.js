myApp.controller('settingsController', function ($scope, $rootScope, $cordovaPreferences, $timeout) {
    $scope.input = {};

    document.addEventListener("deviceready", function () {
        $cordovaPreferences.fetch('general')
            .success(function (value) {
                $scope.input.general = value;
            });
        $cordovaPreferences.fetch('interests')
            .success(function (value) {
                $scope.input.interests = value;
            });
        $cordovaPreferences.fetch('newsletter')
            .success(function (value) {
                $scope.input.newsletter = value;
            });
    }, false);

    $scope.save = function () {
        $cordovaPreferences.store('general', $scope.input.general);
        $cordovaPreferences.store('interests', $scope.input.interests);
        $cordovaPreferences.store('newsletter', $scope.input.newsletter);
        $rootScope.globalNotification = {
            text: 'Gespeichert!'
        }
        $timeout(function(){
            delete $rootScope.globalNotification;
        }, 3000);
    }
});