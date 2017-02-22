myApp.controller('homeController', function ($scope, $http) {	
	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
		if (cordova.platformId == 'android') {
			StatusBar.backgroundColorByHexString("#830000");
		}
		
		checkMenu();
		function checkMenu() {
			$http.get(URL + '/menus')
			.then(function (response) {
				cordova.plugins.notification.local.schedule({
					title: "Mittagessen",
					text: response.data[0].mainCourse.description
				});
			}, function() {
				setTimeout(function(){ checkMenu(); }, 10000);
			});
		}
	}
});