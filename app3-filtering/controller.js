angular.module('myModule').controller('myCtrl', function($scope, myService) {

	$scope.myData = myService.myData;

	$scope.filterObj = {
		email: ".uk",
		phone: "1"
	}
})
