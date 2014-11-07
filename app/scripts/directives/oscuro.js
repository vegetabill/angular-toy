'use strict';

/**
 * @ngdoc directive
 * @name angularToyApp.directive:oscuro
 * @description
 * # oscuro
 */
angular.module('angularToyApp')
  .directive('oscuro', function () {
    return {
      templateUrl: '/views/directives/oscuro.html',
      restrict: 'E',
      scope: {
        dog: '='
      }
    };
  });
