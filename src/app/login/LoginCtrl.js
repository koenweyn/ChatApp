(function () {
  'use strict';

  angular.module('chat-app.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($scope, $state, webStorage) {
    $scope.user = {
      name: webStorage.local.get('user.name')
    };

    $scope.nameFocus = !$scope.user.name;
    $scope.passwordFocus = !!$scope.user.name;


    $scope.login = function() {
      webStorage.local.add('user.name', $scope.user.name);
      $state.go('tabs.contacts');
    }
  }
}());