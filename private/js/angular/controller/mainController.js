myApp.controller('mainController', function ($scope, $cordovaPreferences) {
    $scope.slide = function (href, direction) {
        slide(href, direction);
    }

    document.addEventListener("deviceready", function () {
        $cordovaPreferences.fetch('general')
            .success(function (value) {
                if (value.notifications) {
                    cordova.plugins.notification.local.schedule({
                        id: 1,
                        title: "Menü eingetragen",
                        text: "Roadhouse hat ein Menü eingetragen",
                        icon: 'file://icon',
                        smallIcon: 'file://notification'
                    });
                }
            });
    }, false);
});