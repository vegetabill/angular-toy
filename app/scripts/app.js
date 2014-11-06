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

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        action: 'dogs.index',
        controller: 'dogs.index'
      })
      .when('/dogs', {
        action: 'dogs.index',
        controller: 'dogs.index'
      })
      .when('/dogs/:identifier/edit', {
        action: 'dogs.edit',
        controller: 'dogs.edit'
      });
  });
