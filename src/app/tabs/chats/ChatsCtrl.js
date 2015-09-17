(function () {
  'use strict';

  angular.module('chat-app.tabs.chats')
    .controller('ChatsCtrl', ChatsCtrl);

  /* @ngInject */
  function ChatsCtrl($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(contact) {
      Chats.remove(contact);
    }
  }

}());