'use strict';

/**
 * @ngdoc function
 * @name <%= name %>AngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the <%= name %>AngularApp
 */
angular.module('<%= name %>AngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.service = cockpit.dbus('org.domain.dbusname')
    $scope.cdb = $scope.service.proxy('org.domain.dbusname.ProxyName', '/org/domain/dbusname/ProxyName/configuration');

    $scope.cdb.wait(function () {
      // do things here...
    });
  });
