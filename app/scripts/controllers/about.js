'use strict';

/**
 * @ngdoc function
 * @name angularToyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularToyApp
 */
angular.module('angularToyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
