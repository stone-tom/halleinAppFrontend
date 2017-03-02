myApp.controller('taxiController', function ($scope) {
    $scope.taxis = [
        {name: 'Taxi Resul', phone: '71111'},
        {name: 'City Taxi', phone: '82030'},
        {name: "DES IS'A TAXI", phone: '70400'},
        {name: "Taxi Steiner", phone: '70400'},
        {name: "Taxi Comfortline", phone: '70400'},
        {name: "Abdinghoff Taxi", phone: '70400'},
        {name: "Alfred Aschauer", phone: '70400'}
    ]

    $scope.random = function(array) {
        return array.sort(function() {
            return .5 - Math.random();
        });
    }
});