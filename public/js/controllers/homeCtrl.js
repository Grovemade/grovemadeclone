angular.module('grovemade')
.controller('homeCtrl', function($scope, $stateParams, $interval, $timeout){
    $scope.myInterval = 3000;
    var index = -1;
    $scope.slides = [
      {
        image: '/img/homemarq-walnut-desk-collection-G2_1.jpg',
        title: 'Desk Collection'
      },
      {
        image: '/img/homemarq-watch-02-A3_1.jpg',
        title: 'Wood Watch'
      },
      {
        image: '/img/homemarq-wallet-A4_1.jpg',
        title: 'Everyday Carry'
      },
      {
        image: '/img/homemarq-wallet-case-A2_1.jpg',
        title: 'Wallet Case'
      },
      {
        image: '/img/homemarq-wood-iphone-6-case-B2_1.jpg',
        title: 'iPhone 7 Cases'
      },
      {
        image: '/img/homemarq-bifold-wallet-E1_1.jpg',
        title: 'Bifold Wallet'
      },
      {
        image: '/img/homemarq-wood-speakers-A1_2.jpg',
        title: 'Wood Speakers'
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

      $scope.photoClass.splice(0, 1, 'animated fadeOut')
      $timeout(function(){
        $scope.photoClass.splice(0, 1, 'animated fadeIn')
        $scope.selected = $scope.slides[index].image
        $scope.title = $scope.slides[index].title
      }, 500)
    }

    $scope.previous = function(){
      index--
      if(index < 0){
        index = 6
      }
      $scope.nextPhoto = $scope.slides[index].image
      $scope.nextTitle = $scope.slides[index].title

      $scope.photoClass.splice(0, 1, 'animated fadeOut')
      $timeout(function(){
        $scope.photoClass.splice(0, 1, 'animated fadeIn')
        $scope.selected = $scope.slides[index].image
        $scope.title = $scope.slides[index].title

      }, 500)
    }
    $scope.next()
});
