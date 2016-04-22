angular.module('starter.controllers', [])
//this is the page for controllers
//this is the controller for the first tab(to do list)
.controller('oneCtrl', function($scope, ToDo) {
  $scope.data = ToDo.data;

})
//the is the controller for the second tab (add to list)
.controller('twoCtrl', function($scope, ToDo) {
  var data = {
    newToDo: ""
      };

  //this is wherethe code adds what was wrote on tab2 and saves it in tab 1 using scope. 
  $scope.data = data;
  $scope.addToDo = ToDo.addToDo
  })
//contoller for third tab (forgetting something?)
.controller('threeCtrl', function($scope){});
;



