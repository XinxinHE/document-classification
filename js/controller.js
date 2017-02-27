'use strict'

var app = angular.module('documentClassification')

.controller('UploadCtrl', ['$scope', 'Upload', '$timeout', 'DocService', function($scope, Upload, $timeout, DocService){

  $scope.files = angular.fromJson(DocService.getFiles()); // Get existing files from server

  $scope.show = 0; //Preview uploaded file

  $scope.uploadFile = {name:"", status: "new", enterdate: new Date()};

  $scope.fileChanged = function(elm){
    $scope.file = elm.files[0];
    var file = elm.files[0];
    $scope.uploadFile.name = file.name;
    $scope.uploadFile.enterdate = file.lastModifiedDate;
    $scope.show = 1;
    $scope.$apply();
  }

  $scope.uploadNewFile = function(uploadFile){
      var postFile =  {
        enterdate: uploadFile.enterdate,
        name: uploadFile.name,
        status: uploadFile.status
      }

      var newPostKey = firebase.database().ref().child('files').push().key;
      var updates = {};
      updates['/files/' + newPostKey] = postFile;
      $scope.show = 0;
      firebase.database().ref().update(updates);

      var storageRef = firebase.storage().ref();
      var fileRef = storageRef.child('pdf/' + $scope.file.name).put($scope.file)
      .then(function(snapshot){
        console.log("uploaded a file successfully!");
      });

  };

  $scope.removeFile = function(file){

    var confirmDelete = confirm("Are you sure you want to delete this file?");

    if(confirmDelete == 1) {
        var removeId = $scope.files.$getRecord(file.$id);

        $scope.files.$remove(removeId).then(function() {

        }).catch(function(error){
          alert("Delete Failed! Please try again!")
        });
    }
  };


}])
.controller('DocCtrl', ['$scope' , function($scope){

  $scope.filterText = 'new';
  $scope.tab = 1;
  $scope.file = {};
  //$scope.files = angular.fromJson(DocService.getFiles());

  // $scope.file = DocService.getOneFile(111223);

  $scope.select = function(setTab){
    $scope.tab = setTab;
    if(setTab === 1){
      $scope.filterText = 'new';
    }else if(setTab === 2){
      $scope.filterText = 'exception';
    }else if(setTab === 3){
      $scope.filterText = 'hold';
    }else if(setTab === 4){
      $scope.filterText = 'processed';
    }
  }

  $scope.isSelected = function(checkTab){
    return ($scope.tab === checkTab);
  };

  $scope.fileSelect = function(getFile){
    $scope.file = getFile;
  };

  $scope.submit = function(){

    var update = $scope.files.$getRecord($scope.file.$id);
  //  console.log(update);
    $scope.files.$save(update).then(function() {
      alert('Profile saved!');
    }).catch(function(error) {
      alert('Error!');
    });
  };

}]);
