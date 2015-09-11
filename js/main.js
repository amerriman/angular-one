
var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
});


app.controller("ExercisesController", function($scope){
  $scope.favColor = "blue";
  $scope.rightNow = new Date();
  $scope.seconds = 60 * 60 * 24 * 365 * 100;
  $scope.number = 0;

  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };

  $scope.reverseWord = function(string){
    $scope.word = string.split('').reverse().join('');
  };
  // $scope.secondsInACentury = function(){
  //   $scope.seconds = 60 * 60 * 24 * 365 * 100;
  // };
});


app.controller("PingPong", function($scope){
  $scope.game ={
    p1score: 0,
    p2score: 0,
    p1reset: true,
    p2reset: true,
    // p1serveCount: 0,
    // p2serveCount: 0,
    // p1serve: 0,
    // p2serve: 0,
    serveCount: 0,
    serve: 0

  };

  $scope.serveTurn = function(){

    if ($scope.game.serveCount === 3 || $scope.game.serveCount === 4 || $scope.game.serveCount === 7 || $scope.game.serveCount === 8){
      $scope.game.serve = 1;
    } else {
      $scope.game.serve = 0;
    }
  };

  $scope.incrementScore = function(){
    $scope.game.p1score += 1;
    $scope.game.p1reset = false;
    $scope.game.p2reset = false;
    $scope.game.serveCount += 1;
console.log($scope.game.serveCount, "inc1")
    // if ($scope.game.serveCount === 3 || $scope.game.serveCount === 4 || $scope.game.serveCount === 7 || $scope.game.serveCount === 8){
    //   $scope.game.serve = 1;
    // } else {
    //   $scope.game.serve = 0;
    // }
    if($scope.game.serveCount === 4){
      $scope.game.serveCount = 0;
      //$scope.game.serveCount += 1;
    }
    else if ($scope.game.serveCount === 3 || $scope.game.serveCount === 4){
      $scope.game.serve = 1;
    } else {
      $scope.game.serve = 0;
    }
  };

  $scope.incrementScore2 = function(){
    $scope.game.p2score += 1;
    $scope.game.p1reset = false;
    $scope.game.p2reset = false;
    $scope.game.serveCount += 1;
console.log($scope.game.serveCount, "inc2")
    // if ($scope.game.serveCount === 3 || $scope.game.serveCount === 4 || $scope.game.serveCount === 7 || $scope.game.serveCount === 8){
    //   $scope.game.serve = 1;
    // } else {
    //   $scope.game.serve = 0;
    // }
    if($scope.game.serveCount === 4){
      $scope.game.serveCount = 0;
      //$scope.game.serveCount += 1;
    }
    else if ($scope.game.serveCount === 3 || $scope.game.serveCount === 4){
      $scope.game.serve = 1;
    } else {
      $scope.game.serve = 1;
    }
  };

  $scope.reset = function(){
    $scope.game.p1score = 0;
    $scope.game.p2score = 0;
    $scope.game.p1reset = true;
    $scope.game.p2reset = true;
  };


});










