'use strict';

/**
 * @ngdoc function
 * @name angularToyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularToyApp
 */
angular.module('angularToyApp')
  .controller('MainCtrl', function ($scope) {

    $scope.showDogDetails = function(dog) {
      $scope.currentDog = dog;
    };

    var breeds = [
      { name: 'paperanian' },
      { name: 'pomeranian' },
      { name: 'papillon' },
      { name: 'wolferanian' }
    ];

    $scope.breeds = breeds;

    $scope.doggies = [
      {
        name: 'osito',
        breed: breeds[0]
      },

      {
        name: 'Curo Bear',
        breed: breeds[3]
      }

    ];

  });
