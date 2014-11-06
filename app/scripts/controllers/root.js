'use strict';

angular.module('angularToyApp')
  .controller('root', function ($scope, $rootScope) {

    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams) {
        console.log('[DEBUG] fromState: ' + fromState.name + " " + fromState.url);
        console.log('[DEBUG] fromParams: ' + fromParams.identifier);
        console.log('[DEBUG] toState: ' + toState.name + " " + toState.url);
        console.log('[DEBUG] toParams: ' + toParams.identifier);
      });

    var breeds = [
      { name: 'paperanian' },
      { name: 'pomeranian' },
      { name: 'papillon' },
      { name: 'wolferanian' }
    ];

    var osito = {
      name: 'osito',
      identifier: 'lbb',
      breed: breeds[0]
    };

    var oscuro = {
      name: 'Curo Bear',
      identifier: 'cbear',
      breed: breeds[3]
    };

    var doggies = [osito, oscuro];

    $scope.findDogByIdentifier = function(identifier) {
      for(var idx in doggies) {
        var dog = doggies[idx];
        if (dog.identifier === identifier) {
          return dog;
        }
      }
    };

    $scope.findAllDoggies = function() {
      return doggies;
    };

    $scope.breeds = breeds;

  });
