angular.module('grovemade', ['ui-router']).config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url:'/',
    templateUrl:'./js/views/home.html',
    controller:'homeCtrl'
  })
})
