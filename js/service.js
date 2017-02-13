'use strict'

angular.module('documentClassification', ['firebase'])
  .service('DocService', ['$firebaseArray', function($firebaseArray){
    var config = {
      apiKey: "AIzaSyDs07kiwPNRuw4CnFPwQt6tCK3teHlHjRc",
      authDomain: "jsondb-3c47e.firebaseapp.com",
      databaseURL: "https://jsondb-3c47e.firebaseio.com",
      storageBucket: "jsondb-3c47e.appspot.com",
      messagingSenderId: "1001139776638"
    };
    firebase.initializeApp(config);

    this.getFiles = function(){
      var ref = firebase.database().ref().child("files");
      return $firebaseArray(ref);
    }

  }]);
