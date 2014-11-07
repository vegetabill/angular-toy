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



  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/dogs');

    $stateProvider
      .state('dogs',
        {
          url: '/dogs',
          templateUrl: '/views/dogs/index.html',
          controller: 'dogs.index'
        }
      )
         .state('dogs.edit',
           {
             url: '/:identifier/edit',
             templateUrl: '/views/dogs/edit.html',
             controller: 'dogs.edit'
           }
      )
        .state('dogs.adopt',
        {
          url: '/:identifier/adopt',
          templateUrl: '/views/dogs/adopt.html',
          controller: 'dogs.adopt'
        }

      );


  });
