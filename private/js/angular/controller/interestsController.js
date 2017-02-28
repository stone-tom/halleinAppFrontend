myApp.controller('interestsController', function ($scope) {
    $scope.interests = [
        {name: 'News', active: true},
        {name: 'Vegetarisches', type: 'food'},
        {name: 'Pizza', type: 'food'},
        {name: 'Burger', type: 'food'},
        {name: 'Salate', type: 'food'},
        {name: 'Pommes', type: 'food'},
        {name: 'Suppen', type: 'food'}
    ]
});