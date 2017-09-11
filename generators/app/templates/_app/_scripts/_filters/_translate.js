'use strict';

/**
 * @ngdoc filter
 * @name <%= name %>AngularApp.filter:translate
 * @function
 * @description
 * # translate
 * Filter in the <%= name %>AngularApp.
 */
angular.module('<%= name %>AngularApp')
  .filter('translate', function () {
    return function (input) {
      return cockpit.gettext(input);
    };
  });
