(function() {
  'use strict';

  angular
    .module('common')
    .factory('authService', authService);

  /* @ngInject */
  function authService($q, $firebaseAuth, FIREBASE_URL) {
    var fbAuth = $firebaseAuth(new Firebase(FIREBASE_URL));
    var authDeferred = $q.defer();

    return {
      authenticate: authenticate,
      isAuthenticated: isAuthenticated,
      whenAuthenticated: whenAuthenticated
    };

    function isAuthenticated() {
      var auth = fbAuth.$getAuth();
      return auth && auth.uid;
    }

    function whenAuthenticated() {
      return authDeferred.promise;
    }

    function authenticate(email, password) {
      return fbAuth.$authWithPassword({
        email: email,
        password: password
      }).then(function(authData) {
        authDeferred.resolve();
        console.info("Logged in as:", authData.uid);
        return authData.uid;
      }).catch(function(error) {
        console.error("Authentication failed:", error);
        return $q.reject(error.message);
      });
    }
  }
})();
