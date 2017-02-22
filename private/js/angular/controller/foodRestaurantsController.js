myApp.controller('foodRestaurantsController', function ($scope, $http) {
    $http.get(URL + '/restaurants?get=id,restaurantname')
        .then(function (response) {
            $scope.restaurants = response.data;
        })
});
