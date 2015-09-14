
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
    serveCount: 0,
    serve: 0

  };


  $scope.incrementScore = function(){
    $scope.game.p1score += 1;
    $scope.game.p1reset = false;
    $scope.game.p2reset = false;
    $scope.game.serveCount += 1;

    if($scope.game.serveCount === 4){
      $scope.game.serveCount = 0;
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

    if($scope.game.serveCount === 4){
      $scope.game.serveCount = 0;
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


app.controller("contacts", function($scope){
  $scope.contacts = [
    {
      name: "Alice",
      email: "Alice@wonderland.com",
      phone: "123-456-7890"
    },
    {
      name: "Jack",
      email: "farmboy@beanstalk.com",
      phone: "321-654-0987"
    },
    {
      name: "Susie",
      email: "cutie@que.com",
      phone: "987-678-4321"
    }
  ];

  $scope.addContact = function(){
    if($scope.newPerson.$valid){
      var newInfo=
        {
          name: $scope.name,
          email: $scope.email,
          phone: $scope.phone,
        };
      $scope.contacts.push(newInfo);
      // $scope.newPerson.$setPristine();
      // $scope.newPerson.$setUntouched();
      // $scope.newPerson.$setValidity();

    }
  };
});
//end contacts

app.controller("reddit", function($scope){
  $scope.posts =[
    {
      title: "Fort Fun",
      author: "The Ram",
      description: "Blah blah blah beer.",
      image: 'img/fortcollins.jpg',
      date:'Mon Sep 14 2015 10:23pm',
      votes: 3,
      comments: 0
    },
    {
      title: "Vermont",
      author: "JimBob Smith",
      description: "Hillbilly nonsense.",
      image: 'img/Vermont.jpg',
      date:'Sat Sep 12 2015 8:10am',
      votes: 0,
      comments: 0
    },
    {
      title: "New York, NY",
      author: "Veronica Princess",
      description: "Fancy schmancy gravity schmavity.",
      image: 'img/NYC.jpg',
      date:'Fri Sep 11 2015 11:46am',
      votes: -1,
      comments: 0
    }
  ];

  $scope.addPost = function(){
    if($scope.newPost.$valid){
      var newReddit =
        {
          title: $scope.title,
          author: $scope.author,
          description: $scope.description,
          image: $scope.image,
          date: Date.now(),
          votes: 0,
          comments: 0
        };
      $scope.posts.push(newReddit);

    }
  };

});
















