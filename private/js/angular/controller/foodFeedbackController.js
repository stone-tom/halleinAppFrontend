myApp.controller('foodFeedbackController', function ($scope, $http) {
    $http.get(URL + '/feedback?get=restaurant,rating,subject,text&status=2')
        .then(function (response) {
            $scope.bubbles = response.data;
        })
});
