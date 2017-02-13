'use strict'

var app = angular.module('documentClassification');
app.controller('DocCtrl', ['$scope', 'DocService', function($scope, DocService){

  $scope.filterText = 'new';
  $scope.tab = 1;

  $scope.files = DocService.getFiles();
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
  }

}]);
