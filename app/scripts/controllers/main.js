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

    var addDog = function(name) {
      $scope.doggies.push({ name: name, breed: null });
    };

    var showDogDetails = function(dog) {
      $scope.currentDog = dog;
    };

    var breeds = [
      { name: 'paperanian' },
      { name: 'pomeranian' },
      { name: 'papillon' },
      { name: 'wolferanian' }
    ];

    var osito = {
      name: 'osito',
      breed: breeds[0]
    };

    var oscuro = {
      name: 'Curo Bear',
      breed: breeds[3]
    };


    var doggies = [osito, oscuro];

    showDogDetails({ name: null, breed: null });

    $scope.breeds = breeds;
    $scope.showDogDetails = showDogDetails;
    $scope.addDog = addDog;
    $scope.doggies = doggies;

  });
