
var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
});


app.controller("ExercisesController", function($scope){
  $scope.favColor = "blue";

  $scope.secondsInACentury = function(){
    $scope.seconds = 60 * 60 * 24 * 365 * 100;
  };
});










