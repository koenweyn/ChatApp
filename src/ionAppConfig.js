angular.module('chat-app')
  .config(config);

  /* @ngInject */
  function config($ionicAppProvider, IONIC_APP_ID, IONIC_API_KEY) {
    // Identify app
    $ionicAppProvider.identify({
      app_id: IONIC_APP_ID,
      api_key: IONIC_API_KEY
    });
  }