angular.module('movie.controller', [])

movie.controller('SearchController', ['$scope', '$http', function($scope, $http) {
  $scope.blah = "GET DIS SHIT MERGED";
  $scope.selections = [null, null];
  $scope.person1Name = "";
  $scope.list1 = [];
  $scope.person2Name = "";
  $scope.list2 = [];
  $scope.similarities = [];

  $scope.searchPerson1 = function() {

    var request = $http.post('/search/query', {
      term: $scope.person1Name
    });

    request.success(function(data, status) {
      $scope.list1 = data.results;
    });

    request.error(function(data) {
    });
  };

  $scope.searchPerson2 = function() {

    var request = $http.post('/search/query', {
      term: $scope.person2Name
    });

    request.success(function(data, status) {
      $scope.list2 = data.results;
    });

    request.error(function(data) {
    });
  };

  $scope.getSimilarities = function() {
    var request = $http.post('/search/similarities', {
      selections: $scope.selections
    });

    request.success(function(data, status) {
      $scope.similarities = data.results;
    });

    request.error(function(data) {
    });
  }

  $scope.selectResult = function(selection, index) {
    $scope.selections[Number(index)] = selection;
  };

}]);