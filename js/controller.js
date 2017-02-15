'use strict'

var app = angular.module('documentClassification');
app.controller('DocCtrl', ['$scope', 'DocService', function($scope, DocService){

  $scope.filterText = 'new';
  $scope.tab = 1;
  $scope.index  = 0;
  $scope.files = angular.fromJson(DocService.getFiles());


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

     for(var file in $scope.files) {
     if($scope.files[file].$id === getFile.$id) {
       $scope.index = file;
     }
   }

  };

  $scope.submit = function(){

    var update = $scope.files.$getRecord($scope.files[$scope.index].$id);
  //  console.log(update);
    $scope.files.$save(update).then(function() {
      alert('Profile saved!');
    }).catch(function(error) {
      alert('Error!');
    });
  };

}]);
