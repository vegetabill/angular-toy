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
  ])

  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

      .when('/', {
        templateUrl: '/views/dogs.html',
        controller: 'DogsIndexCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dogs/:identifier/edit', {
        templateUrl: '/views/dogs/edit.html',
        controller: 'DogEditCtrl'
      })
      .when('/dogs/new', {
        templateUrl: '/views/dogs/new.html',
        controller: 'DogNewCtrl'
      });


  });
