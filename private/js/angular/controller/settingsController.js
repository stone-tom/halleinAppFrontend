myApp.controller('settingsController', function ($scope, $cordovaPreferences) {
    $scope.input = {
        pupil: true,
        tourist: false,
        interests: [
            {name: 'News', active: true},
            {name: 'Vegetarisches', type: 'food'},
            {name: 'Pizza', type: 'food'},
            {name: 'Burger', type: 'food'},
            {name: 'Salate', type: 'food'},
            {name: 'Pommes', type: 'food'},
            {name: 'Suppen', type: 'food'}
        ],
        newsletter: false,
        notifications: true
    }
    $scope.fetch = function() {
        $cordovaPreferences.fetch('key')
            .success(function(value) {
                alert("Success: " + value);
            })
            .error(function(error) {
                alert("Error: " + error);
            })
    };
    $scope.save = function(){
        $scope.store = function() {
            $cordovaPreferences.store('key', 'myMagicValue')
                .success(function(value) {
                    alert("Success: " + value);
                })
                .error(function(error) {
                    alert("Error: " + error);
                })
        };
    }
});