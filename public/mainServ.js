angular.module("hikeApp")
.service("mainServ", function($http){
  this.getAllTheHikes = function (){
    return($http{
      method: "GET",
      url: "/hikes"
    }).then(function(response){
      return response.data;
    });
  };

  this.addNewHike = function (){
    return($http{
      method: "POST",
      url: "/hikes"
    }).then(function(response){
      return response;
    });
  };
  this.changeTheHike = function(){
    return ($http{
      method: "PUT",
      url: "/hikes"
    }).then(function(response){
      return response;
    })
  }


});
