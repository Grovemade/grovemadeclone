angular.module('grovemade')
.controller('shopCtrl', ($scope, homeSrvc, $stateParams) => {

  homeSrvc.getShop().then((response) => {
    $scope.products = response.data;
    console.log('CTRL', $scope.products);
  })

});
