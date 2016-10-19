angular.module("hikeApp")
.controller("mainCtrl", function($scope, mainServ){

$scope.getHike = function(){
  mainServ.getAllTheHikes()
  .then(function(response){
    $scope.allTheHikes = reponse;
  })
};

$scope.postNewHike = function(){
  mainServ.addNewHike(nextHike)
  .then(function(response){
    $scope.newHike.name = "";
    $scope.getHike();
  })
};


});
