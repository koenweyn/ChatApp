(function () {
  'use strict';

  angular.module('chat-app.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl(webStorage, $ionicLoading, authService, $ionicViewSwitcher) {
    var vm = this;

    vm.user = {
      email: webStorage.local.get('user.email')
    };

    vm.emailFocus = !vm.user.email;
    vm.passwordFocus = !!vm.user.email;


    vm.login = function() {
      $ionicViewSwitcher.nextDirection('enter');
      webStorage.local.add('user.email', vm.user.email);
      $ionicLoading.show({
        template: 'Authenticating ...'
      });
      authService.authenticate(vm.user.email, vm.user.password)
        .then(function() {
          // the user will automatically be forwarded to the correct view
        })
        .catch(function(errorMessage) {
          vm.error = errorMessage;
        })
        .finally(function() {
          $ionicLoading.hide();
        });
    }
  }
}());