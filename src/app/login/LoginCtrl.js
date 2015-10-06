(function () {
  'use strict';

  angular.module('chat-app.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($scope, webStorage, $ionicModal, $timeout, authService) {
    var modal;
    var vm = this;
    $scope.login = vm;

    vm.emailFocus = undefined;
    vm.passwordFocus = undefined;
    vm.error = undefined;
    vm.authenticating = undefined;
    vm.user = {
      email: webStorage.local.get('user.email')
    };

    vm.login = login;

    var waitUntilFocus = ionic.Platform.isIOS()? 500 : 0;

    $timeout(function() {
      vm.emailFocus = !vm.user.email;
      vm.passwordFocus = !!vm.user.email;
    }, waitUntilFocus);

    $ionicModal.fromTemplateUrl('templates/app/login/login.tpl.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(m) {
      modal = m;
      modal.show();
    });

    function login() {
      vm.authenticating = true;
      webStorage.local.add('user.email', vm.user.email);
      authService.authenticate(vm.user.email, vm.user.password)
        .then(function() {
          modal.remove();
        })
        .catch(function(errorMessage) {
          vm.error = errorMessage;
        })
        .finally(function() {
          vm.authenticating = false;
        });
    }
  }
}());