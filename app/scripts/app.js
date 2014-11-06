'use strict';

/**
 * @ngdoc overview
 * @name angularToyApp
 * @description
 * # angularToyApp
 *
 * Main module of the application.
 */
angular
  .module('angularToyApp', [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'ui.router'
  ])



  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/state1');


    $stateProvider
      .state('state1',
      {
        url: '/state1',
        template: '<h1>First State</h1>'
      }
     )
     .state('state2',
     {
       url: '/state2',
       template: '<h2>SECOND</h2>'
     });

  });
