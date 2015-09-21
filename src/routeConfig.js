/// <reference path="../../typings/cordova/cordova.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {
  'use strict';

  angular.module('chat-app')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/app/login/login.tpl.html',
        controller: 'LoginCtrl as login'
      })

      // setup an abstract state for the tabs directive
      .state('tabs', {
        url: "/tabs",
        abstract: true,
        templateUrl: "templates/app/tabs/tabs.html"
      })

      // Each tabs has its own nav history stack:

      .state('tabs.contacts', {
        url: '/contacts',
        views: {
          'tab-contacts': {
            templateUrl: 'templates/app/tabs/contacts/tab-contacts.html',
            controller: 'ContactsCtrl as contacts',
            controllerAs: 'contacts'
          }
        }
      })

      .state('tabs.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/app/tabs/dash/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tabs.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/app/tabs/chats/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tabs.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/app/tabs/chats/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tabs.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/app/tabs/account/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('login');

  }

}());

