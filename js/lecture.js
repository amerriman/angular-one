angular.module('testApp', []);//setter

var mainControllerFunction = function($scope){
  $scope.greeting = "Hello Class!";

  var excitement = 0;
  $scope.excite = function(){
    excitement++;
    if(excitement>5){
      $scope.greeting = "Class is excited!";
    }
  };
};

var secondaryControllerFunction = function($scope){
  $scope.greet = "Hello!";
  var roadhouseMovie = {
    'title': 'Roadhouse',
    'genre': 'Comedy-Drama',
    'lead actor': 'Patrick'
  };
    var jurassicMovie = {
    'title': 'Jurassic Park 16',
    'genre': 'Comedy',
    'lead actor': 'Yusef'
  };
    var theNotebook = {
    'title': 'The Notebook',
    'genre': 'Romance',
    'lead actor': 'Ryan Gosling'
  };

  $scope.movies = [roadhouseMovie, jurassicMovie, theNotebook];

  $scope.students = ["Jason", "Ashley", "Mike", "Billy"];
};

angular.module('testApp')
  .controller('mainController', ['$scope', mainControllerFunction])
  .controller('secondaryController', ['$scope', secondaryControllerFunction]);  //getter


//another way

//var myApp = angular.module('testApp', []);  //(setter)

// myApp.controller('mainControllerFunction', function($scope){
//   $scope.greeting = 'Hello Class';
// });

