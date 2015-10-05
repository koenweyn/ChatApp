(function () {
  'use strict';

  angular.module('chat-app.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($scope, webStorage, $ionicModal, authService) {
    var vm = this;
    $scope.login = vm;

    vm.user = {
      email: webStorage.local.get('user.email')
    };

    vm.emailFocus = !vm.user.email;
    vm.passwordFocus = !!vm.user.email;

    $ionicModal.fromTemplateUrl('templates/app/login/login.tpl.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      vm.modal = modal;
      modal.show();
    });

    vm.login = function() {
      vm.authenticating = true;
      webStorage.local.add('user.email', vm.user.email);
      authService.authenticate(vm.user.email, vm.user.password)
        .then(function() {
          vm.modal.hide();
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