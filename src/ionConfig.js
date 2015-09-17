/// <reference path="../../typings/cordova/cordova.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {
  'use strict';

  angular.module('chat-app')
    .run(ionConfig);

  function ionConfig($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        window.StatusBar.styleLightContent();
      }
    });
  }

}());

