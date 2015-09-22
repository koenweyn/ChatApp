/// <reference path="../../typings/cordova/cordova.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {
  'use strict';

  const LOGIN_STATE = 'login';
  const DEFAULT_STATE = 'tabs.chats';


  angular.module('chat-app')
    .config(routeConfig)
    .run(stateChangePreventer);

  function routeConfig($stateProvider, $urlRouterProvider) {

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
    $urlRouterProvider.otherwise('tabs.chats');
  }

  function stateChangePreventer($rootScope, $state, authService) {
    var stateAfterLogin = {};

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      //jump to login if not authenticated
      if (toState.name !== LOGIN_STATE && !authService.isAuthenticated()) {
        stateAfterLogin = {
          state: toState.name,
          params: toParams
        };
        event.preventDefault();

        $state.go(LOGIN_STATE);
      }
    });

    //now jump to the state that we wanted (or the default)
    $rootScope.$on('$authenticated', function() {
      $state.go(
        stateAfterLogin.state || DEFAULT_STATE,
        stateAfterLogin.params
      )
    })
  }

}());

