myApp.controller('startController', function ($scope) {
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		if (cordova.platformId == 'android') {
			StatusBar.backgroundColorByHexString("#005676");
		}
	}
});