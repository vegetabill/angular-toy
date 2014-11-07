'use strict';

angular.module('angularToyApp')
  .controller('dogs.index', function ($scope) {
    $scope.doggies = $scope.findAllDoggies();
  })
  .controller('dogs.edit', function ($scope, $stateParams) {
    $scope.dog = $scope.findDogByIdentifier($stateParams.identifier);
  })
  .controller('dogs.adopt', function($scope) {
    $scope.message = "Success!";
  });
