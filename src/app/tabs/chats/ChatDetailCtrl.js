(function () {
  'use strict';

  angular.module('chat-app.tabs.chats')
    .controller('ChatDetailCtrl', ChatDetailCtrl);

  function ChatDetailCtrl($scope, $stateParams, Chats) {
    $scope.contact = Chats.get($stateParams.chatId);
  }

}());