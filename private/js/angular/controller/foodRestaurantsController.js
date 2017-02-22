myApp.controller('foodRestaurantsController', function ($scope, $http) {
    $http.get(URL + '/restaurants?get=restaurantname')
        .then(function (response) {
            $scope.restaurants = response.data;
        })
});
