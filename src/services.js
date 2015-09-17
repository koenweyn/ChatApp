angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

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
