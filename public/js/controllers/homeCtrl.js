angular.module('grovemade')
.controller('homeCtrl', function($scope, $stateParams, $interval, $timeout){
    $scope.myInterval = 3000;
    var index = -1;
    $scope.slides = [
      {
        image: '/img/homemarq-walnut-desk-collection-G2_1.jpg',
        title: 'DESK COLLECTION',
        color: 'IN WALNUT OR MAPLE'
      },
      {
        image: '/img/homemarq-watch-02-A3_1.jpg',
        title: 'WOOD WATCH',
        color: 'MODEL 02'
      },
      {
        image: '/img/homemarq-wallet-A4_1.jpg',
        title: 'EVERYDAY CARRY',
        color: 'COLLECTION'
      },
      {
        image: '/img/homemarq-wallet-case-A2_1.jpg',
        title: 'WALLET CASE',
        color: 'FOR iPHONE 6 & 7'
      },
      {
        image: '/img/homemarq-wood-iphone-6-case-B2_1.jpg',
        title: 'iPHONE   7 CASES',
        color: 'IN WALNUT OR MAPLE'

      },
      {
        image: '/img/homemarq-bifold-wallet-E1_1.jpg',
        title: 'BIFOLD WALLET',
        color: 'IN BLACK OR TAN'
      },
      {
        image: '/img/homemarq-wood-speakers-A1_2.jpg',
        title: 'WOOD SPEAKERS',
        color: 'IN WALNUT OR MAPLE'
      }
    ];
    $scope.photoClass = []
    var timer = $interval(function(){
      $scope.next()
    }, 5000)
    $scope.stop = function(){
      $interval.cancel(timer)
    }
    $scope.next = function(){
      index++
      if(index > 6){
        index = 0
      }
      $scope.nextPhoto = $scope.slides[index].image
      $scope.nextTitle = $scope.slides[index].title
      $scope.nextColor = $scope.slides[index].color

      $scope.photoClass.splice(0, 1, 'animated fadeOut')
      $timeout(function(){
        $scope.photoClass.splice(0, 1, 'animated fadeIn')
        $scope.selected = $scope.slides[index].image
        $scope.title = $scope.slides[index].title
        $scope.color = $scope.slides[index].color
      }, 500)
    }

    $scope.previous = function(){
      index--
      if(index < 0){
        index = 6
      }
      $scope.nextPhoto = $scope.slides[index].image
      $scope.nextTitle = $scope.slides[index].title
      $scope.nextColor = $scope.slides[index].color

      $scope.photoClass.splice(0, 1, 'animated fadeOut')
      $timeout(function(){
        $scope.photoClass.splice(0, 1, 'animated fadeIn')
        $scope.selected = $scope.slides[index].image
        $scope.title = $scope.slides[index].title
        $scope.color = $scope.slides[index].color
      }, 500)
    }
    $scope.next()
});
