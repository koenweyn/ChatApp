/// <reference path="../../typings/cordova/cordova.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {
  'use strict';

  angular.module('chat-app')
    .run(ionConfig);

  function ionConfig($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        //Disabled scrolling the view up to make place for the on-screen keyboard
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        window.StatusBar.styleLightContent();
      }
    });
  }

}());

