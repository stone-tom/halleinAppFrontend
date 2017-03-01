myApp.controller('mainController', function ($scope) {
    $scope.slide = function(href, direction){
        slide(href, direction);
    }

    document.addEventListener("deviceready", function() {
        cordova.plugins.notification.local.schedule({
            id: 1,
            title: "Menü eingetragen",
            text: "Roadhouse hat ein Menü eingetragen",
            icon: 'file://icon',
            smallIcon: 'file://notification_icon'
    });
    }, false);
});