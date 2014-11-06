'use strict';

angular.module('angularToyApp')
  .controller('dogs.index', function ($scope) {
    $scope.doggies = $scope.findAllDoggies();
  })
  .controller('dogs.edit', function ($scope, $routeParams) {
    $scope.dog = $scope.findDogByIdentifier($routeParams.identifier);
  });
