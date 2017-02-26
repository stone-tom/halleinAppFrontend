myApp.controller('newsletterController', function ($scope) {
    var permissions = cordova.plugins.permissions;
    permissions.hasPermission(permissions.GET_ACCOUNTS, checkPermissionCallback, null);

    function checkPermissionCallback(status) {
        if(!status.hasPermission) {
            var errorCallback = function() {
                console.warn('Camera permission is not turned on');
            }

            permissions.requestPermission(
                permissions.GET_ACCOUNTS,
                function(status) {
                    if(!status.hasPermission) errorCallback();
                },
                errorCallback);
        }
    }

    $scope.input = {};

    window.plugins.DeviceAccounts.getEmail(function(email){
        // accounts is an array with objects containing name and type attributes
        $scope.input.email = email;
    });
});