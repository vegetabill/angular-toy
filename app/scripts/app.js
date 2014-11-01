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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
