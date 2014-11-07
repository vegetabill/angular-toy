'use strict';

/**
 * @ngdoc directive
 * @name angularToyApp.directive:osito
 * @description
 * # osito
 */
angular.module('angularToyApp')
  .directive('osito', function () {
    console.log('creating OSITO directive');
    return {
      templateUrl: '/views/directives/osito.html',
      restrict: 'E'
    };
  });
