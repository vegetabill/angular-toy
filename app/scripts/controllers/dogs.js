'use strict';

angular.module('angularToyApp')
  .controller('DogsIndexCtrl', function ($scope) {
    $scope.doggies = $scope.findAllDoggies();
  })
  .controller('DogEditCtrl', function ($scope, $routeParams) {
    $scope.dog = $scope.findDogByIdentifier($routeParams.identifier);
  });
