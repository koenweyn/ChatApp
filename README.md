# ChatApp
An Ionic mobile chat client using Firebase.io as a backend

# Installation
- Install ionic a global node module: `npm install -g ionic`
- Download dev dependencies: `npm install`
- Download prod dependencies: `bower install`
- Create your own config file

```
// e.g. src/appConstants.js

angular.module('chat-app')
  .constant('FIREBASE_URL', 'https://YOUR_FIREBASE_APP_ID.firebaseio.com')

  // The App ID (from apps.ionic.io) for the server
  .constant('IONIC_APP_ID', 'YOUR_IONIC_APP_ID')

  // The public API key all services will use for this app
  .constant('IONIC_API_KEY', 'YOUR_IONIC_API_KEY')
;
```

# Build
- Create all necessary files in the www folder `gulp build`.
- Or run `gulp watch` while developing.  

# Run
Start up a live reload server and a browser by running `npm run serve`
