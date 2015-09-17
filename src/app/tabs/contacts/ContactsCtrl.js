(function () {
  'use strict';

  angular.module('chat-app.tabs.contacts')
    .controller('ContactsCtrl', ContactsCtrl);

  /* @ngInject */
  function ContactsCtrl(contactsService) {
    var vm = this;

    vm.startSearch = startSearch;
    vm.cancelSearch = cancelSearch;

    vm.contacts = contactsService.all();

    function startSearch() {
      vm.searching = true;
    }

    function cancelSearch() {
      vm.searching = false;
    }
  }

}());