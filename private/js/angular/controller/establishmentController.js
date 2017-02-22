myApp.controller('establishmentController', function ($scope) {
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		if (cordova.platformId == 'android') {
			StatusBar.backgroundColorByHexString("#27ae60");
		}
	}

    $scope.sexes = {
options:
[
        {name: 'MÄNNLICH'},
        {name: 'WEIBLICH'}]

}



});
