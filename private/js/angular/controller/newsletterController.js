myApp.controller('newsletterController', function ($scope) {
    $scope.input = {};
    var permissions = cordova.plugins.permissions;
    permissions.hasPermission(permissions.GET_ACCOUNTS, checkPermissionCallback, null);

    function checkPermissionCallback(status) {
        //alert(alert(JSON.stringify(status, null, 4)));
        if(status.hasPermission) {
            window.plugins.DeviceAccounts.getEmail(function (email) {
                // accounts is an array with objects containing name and type attributes
                //alert(email);
                $scope.input.email = email;
            });
        }
        else {
           getPermission();
        }
    }

    function getPermission() {
        permissions.requestPermission(
            permissions.GET_ACCOUNTS,
            checkPermissionCallback,
            null);
    }
});