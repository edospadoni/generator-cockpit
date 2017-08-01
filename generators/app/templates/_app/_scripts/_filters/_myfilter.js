'use strict';

/**
 * @ngdoc filter
 * @name <%= name %>AngularApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the <%= name %>AngularApp.
 */
angular.module('<%= name %>AngularApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
