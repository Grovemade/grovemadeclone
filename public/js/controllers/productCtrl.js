angular.module('grovemade')
.controller('productCtrl', ($scope, homeSrvc, $stateParams) => {
  
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

}); //end of controller