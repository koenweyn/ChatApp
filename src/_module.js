(function() {
  'use strict';

  angular.module('chat-app', [
      'ionic',
      'ngCordova',
      'ionic.service.core',
      'ionic.service.push',
      'common',
      'chat-app.login',
      'chat-app.tabs.contacts',
      'chat-app.tabs.dash',
      'chat-app.tabs.chats',
      'chat-app.tabs.account'
    ]
  );

}());

