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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
