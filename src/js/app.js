var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', configRouter]);

function configRouter ($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'AppCtrl',
      // controllerAs: '$ctrl',
      templateUrl: 'home'
    });
}
