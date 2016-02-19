angular.module('apiApp').service('swSvc', function($http, $q) {

  var baseUrl = "http://swapi.co/api/";

  this.getStarships = function() {
    var later = $q.defer(); //promise1


    $http({                //promise2
      method: 'GET',       //is made and dies within this $http
      url: baseUrl + 'starships/'
    }).then(function(response) {
       later.resolve(response.data);
    })

    return later.promise;
  }
})
