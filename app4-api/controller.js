angular.module('apiApp').controller('swCtrl', function($scope, swSvc) {

    swSvc.getStarships().then(function(starships) {
      $scope.starships = starships;
      
    })
});
