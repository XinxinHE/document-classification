'use strict'

<<<<<<< HEAD
angular.module('documentClassification', ['firebase', 'ngFileUpload'])
  .service('DocService', ['$firebaseArray', function($firebaseArray){
=======
angular.module('documentClassification', ['firebase'])
  .service('DocService', ['$firebaseArray', '$firebaseObject', function($firebaseArray, $firebaseObject){
>>>>>>> origin/master
    var config = {
      apiKey: "AIzaSyDs07kiwPNRuw4CnFPwQt6tCK3teHlHjRc",
      authDomain: "jsondb-3c47e.firebaseapp.com",
      databaseURL: "https://jsondb-3c47e.firebaseio.com",
      storageBucket: "jsondb-3c47e.appspot.com",
      messagingSenderId: "1001139776638"
    };
    firebase.initializeApp(config);

    this.getFiles = function(){
<<<<<<< HEAD
      var ref = firebase.database().ref().child("files");
      return $firebaseArray(ref);
    }

=======
      var ref = firebase.database().ref().child('files');
      return $firebaseArray(ref);
    }

    // this.getOneFile = function(fileId){
    //   var ref = firebase.database().ref().child('files').child(file);
    //   return $firebaseObject(ref);
    // }

>>>>>>> origin/master
  }]);
