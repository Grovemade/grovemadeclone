angular.module('grovemade')
.controller('homeCtrl', function($scope, $stateParams, $interval, $timeout){
    $scope.myInterval = 3000;
    var index = -1;
    $scope.slides = [
      {
        image: '/img/homemarq-walnut-desk-collection-G2_1.jpg',
        title: 'testing'
      },
      {
        image: '/img/homemarq-watch-02-A3_1.jpg'
      },
      {
        image: '/img/homemarq-wallet-A4_1.jpg'
      },
      {
        image: '/img/homemarq-wallet-case-A2_1.jpg'
      },
      {
        image: '/img/homemarq-wood-iphone-6-case-B2_1.jpg'
      },
      {
        image: '/img/homemarq-bifold-wallet-E1_1.jpg'
      },
      {
        image: '/img/homemarq-wood-speakers-A1_2.jpg'
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
      $scope.photoClass.splice(0, 1, 'animated fadeOut')
      $timeout(function(){
        $scope.photoClass.splice(0, 1, 'animated fadeIn')
        $scope.selected = $scope.slides[index].image
        $scope.title = $scope.slides[index].title
      }, 750)
    }

    $scope.previous = function(){
      index--
      if(index < 0){
        index = 6
      }
      $scope.photoClass.splice(0, 1, 'animated fadeOut')
      $timeout(function(){
        $scope.photoClass.splice(0, 1, 'animated fadeIn')
        $scope.selected = $scope.slides[index].image
        $scope.title = $scope.slides[index].title

      }, 750)
    }
    $scope.next()
});
