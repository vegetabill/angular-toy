console.log("Loading Toy App");

console.log(angular);

// Declare app level module which depends on views, and components
var app = angular.module('ToyApp', []);

app.controller("ApplicationController", function($scope){
  $scope.now = new Date();
});
