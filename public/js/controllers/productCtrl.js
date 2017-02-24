angular.module('grovemade')
.controller('productCtrl', ($scope, homeSrvc, $stateParams, $rootScope) => {

homeSrvc.getProduct($stateParams.id).then((response) => {
  $scope.item = response.data;
  console.log('DETAILs', $scope.item);
});

homeSrvc.getCarousel($stateParams.id).then((response) => {
  console.log('PRODUCT ID', $stateParams.id);
  $scope.carousels = response.data;
  console.log('CAROUSEL', $scope.carousels);
});

homeSrvc.getSizes($stateParams.id).then((response) => {
  $scope.sizes = response.data;
  console.log('SIZES', $scope.sizes);
});

$scope.getImages = (size) => {
  homeSrvc.getImages(size).then((response) => {
    console.log('SIZE ID', size);
    $scope.images = response.data;
    console.log('IMAGES', $scope.images);
  }).catch( (err) => {
    console.log(err);
  })
};

$scope.quantity = 1;
  $scope.addToCart = (size, quantity) => {
    // $rootScope.cartTotal += Number(quantity);
    let productId = $scope.item[0].id;
    let productName = $scope.item[0].name;
    if($scope.item.image1 == null){
      var productImage = $scope.item[0].image2;
    } else {
      var productImage = $scope.item[0].image1;
    }
    homeSrvc.addToCart(productId, productName, productImage, size, quantity);
  };

}); //end of controller
