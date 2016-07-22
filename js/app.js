var app = angular.module('FruitsAndVeggies', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.foodArray = fruits.concat(vegetables);
  $scope.fruitArray = [];
  $scope.veggieArray = [];

  $scope.leftClick = function(index) {
    $scope.foodArray.push($scope.veggieArray[index]);
    $scope.veggieArray.splice(index, 1);
  };

  $scope.leftClickMid = function(index) {
    $scope.fruitArray.push($scope.foodArray[index]);
    $scope.foodArray.splice(index, 1);
  };

  $scope.rightClickMid = function(index) {
    $scope.veggieArray.push($scope.foodArray[index]);
    $scope.foodArray.splice(index, 1);
  };

  $scope.rightClick = function(index) {
    $scope.foodArray.push($scope.fruitArray[index]);
    $scope.fruitArray.splice(index, 1);
  }
  // $scope.random = function(array) {
  //   for (var i = 0; i < array.length; i++) {

  //   }
  // }
}]);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
