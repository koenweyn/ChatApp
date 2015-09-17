(function () {
  'use strict';

  angular.module('chat-app.tabs.account')
    .controller('AccountCtrl', AccountCtrl);

  function AccountCtrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }

}());