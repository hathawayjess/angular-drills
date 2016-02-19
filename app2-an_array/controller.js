angular.module('arrayApp').controller('arrayCtrl', function($scope, myService) {

	$scope.myData = myService.myData;

})
