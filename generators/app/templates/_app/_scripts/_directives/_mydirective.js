'use strict';

/**
 * @ngdoc directive
 * @name  <%= name %>AngularApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('<%= name %>AngularApp')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
