'use strict';

/**
 * @ngdoc overview
 * @name <%= name %>AngularApp
 * @description
 * # <%= name %>AngularApp
 *
 * Main module of the application.
 */
angular
  .module('<%= name %>AngularApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
