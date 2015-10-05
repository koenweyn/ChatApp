/// <reference path="../../typings/cordova/cordova.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {
  'use strict';

  angular.module('chat-app')
    .config(routeConfig)
    .run(stateChangeLog);

  function routeConfig($stateProvider, $urlRouterProvider) {

    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tabs', {
        url: "/tabs",
        abstract: true,
        resolve: {
          // only proceed when the user is authenticated
          /* @ngInject */
          authenticated: function($rootScope, $controller, $timeout, $q, authService) {
            if (!authService.isAuthenticated()) {
              // show the login dialog
              $controller('LoginCtrl', {
                $scope: $rootScope.$new()
              });

              return authService.whenAuthenticated();
            }
          }
        },
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
    $urlRouterProvider.otherwise('/tabs/chats');
  }

  /* @ngInject */
  function stateChangeLog($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
      //noinspection JSUnresolvedVariable
      console.debug('$stateChangeStart: ' + (fromState && fromState.name) + ' -> ' + (toState && toState.name));
    });
  }

}());

