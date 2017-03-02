angular.module('grovemade', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

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

  .state('1', {
    url:'/journal/desk-ergonomics',
    templateUrl:'./templates/desk-ergonomics.html',
    controller:'journalCtrl'
  })

  .state('2', {
    url:'/journal/love-your-work',
    templateUrl:'./templates/love-your-work.html',
    controller:'journalCtrl'
  })

  .state('3', {
    url:'/journal/designing-the-wood-watch-02',
    templateUrl:'./templates/designing-the-wood-watch-02.html',
    controller:'journalCtrl'
  })

  .state('4', {
    url:'/journal/what-kind-case-buyer-are-you-flowchart',
    templateUrl:'./templates/what-kind-case-buyer-are-you-flowchart.html',
    controller:'journalCtrl'
  })

  .state('product', {
    url: '/product/:id',
    templateUrl: '/templates/product.html',
    controller: 'productCtrl'
  })

  .state('cart', {
    url: '/cart',
    templateUrl: '/templates/cart.html',
    controller: 'cartCtrl'
  })
})
