angular.module('grovemade', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url:'/',
    templateUrl:'./templates/home.html',
    controller:'homeCtrl'
  })

  .state('shop', {
    url:'/shop',
    templateUrl:'./templates/shop.html',
    controller:'shopCtrl'
  })

  .state('about', {
    url:'/about',
    templateUrl:'./templates/about.html',
    controller:'aboutCtrl'
  })

  .state('journal', {
    url:'/journal',
    templateUrl:'./templates/journal.html',
    controller:'journalCtrl'
  })


})
