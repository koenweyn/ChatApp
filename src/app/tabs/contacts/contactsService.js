(function () {
  'use strict';
  angular.module('chat-app.tabs.contacts')
    .factory('contactsService', contactsService);

  function contactsService() {
    var contacts = [
      { id: 1, name: 'Adam Bradleyson', company: 'THE FUNNY PAPER CO', online: true },
      { id: 2, name: 'Katy Perry', company: 'FLOWERS.COM', online: true },
      { id: 3, name: 'Moody Mahmoody', company: 'GOOGLE', online: true },
      { id: 4, name: 'John Whitaker', company: 'BANK CARD COMPANY (BCC)', online: true },
      { id: 5, name: 'Marlene Johnson', company: 'GOOGLE', online: true },
      { id: 6, name: 'Dan Ping', company: 'SOFTCORP', online: false }
    ];

    return {
      all: function() {
        return contacts;
      }
    }
  }

}());