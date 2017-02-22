myApp.controller('interestsController', function ($scope) {
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		if (cordova.platformId == 'android') {
			StatusBar.backgroundColorByHexString("#27ae60");
		}
	}

    $scope.interests = [

        {name: 'News', color:'blue'},
        {name: 'Vegetarisch', color:'orange'},
        {name: 'Test', color:'blue'},
        {name: 'Testöö', color:'orange'}


]
});





