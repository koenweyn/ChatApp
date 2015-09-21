(function() {
  'use strict';

  angular
    .module('common')
    .factory('authService', authService);

  /* @ngInject */
  function authService($q, $firebaseAuth, FIREBASE_URL) {
    var fbAuth = $firebaseAuth(new Firebase(FIREBASE_URL));

    return {
      authenticate: authenticate,
      isAuthenticated: isAuthenticated
    };

    function isAuthenticated() {
      var auth = fbAuth.$getAuth();
      return auth && auth.uid;
    }

    function authenticate(email, password) {
      return fbAuth.$authWithPassword({
        email: email,
        password: password
      }).then(function(authData) {
        console.log("Logged in as:", authData.uid);
        return authData.uid;
      }).catch(function(error) {
        console.error("Authentication failed:", error);
        return $q.reject(error.message);
      });
    }
  }
})();
