angular.module('grovemade')
.controller('cartCtrl', function($scope, mainSrvc, $stateParams, $rootScope){

  // $scope.subtotal = 0;
  // $scope.cart;

  // let cartTotal = () => {
  //   console.log('running cartTotal', $scope.cart);
  //   if (!$scope.cart || $scope.cart.length === 0) {
  //     $scope.cart = [];
  //     $scope.subtotal = 0;
  //   } else {
  //     $scope.cart.forEach((element, index) => {
  //       console.log(element);
  //       $scope.subtotal += parseInt(element.productPrice) * parseInt(element.productQuantity);
  //     });
  //   };
  // };
  //
  // let findTotalItems = () => {
  //   $scope.totalItems = 0;
  //   for (let i = 0; i < $scope.cart.length; i++) {
  //     $scope.totalItems += Number($scope.cart[i].productQuantity);
  //   }
  //   console.log($scope.totalItems);
  //   return $scope.totalItems;
  // }

  mainSrvc.getCart().then((response) => {
    $scope.cart = response.data;
    console.log('Cart in controller', $scope.cart);
    cartTotal();
  }).catch((err) => {
    console.log(err);
  });

// $scope.removeFromCart = (item) => {
//   $rootScope.cartTotal = findTotalItems();
//   console.log('remove CTRL', item)
//   mainSrvc.removeFromCart(item).then(() => {
//     mainSrvc.getCart().then((response) => {
//       $scope.cart = response.data;
//       $scope.subtotal = 0;
//       cartTotal();
//       $rootScope.cartTotal = findTotalItems();
//     }).catch((err) => {
//       console.log(err);
//     });
//   });
// };

// $scope.updateQuantity = (item) => {
//   $rootScope.cartTotal = findTotalItems();
//   console.log(item)
//   mainSrvc.updateQuantity(item.productId, item.productQuantity);
//     mainSrvc.getCart().then((response) => {
//       $scope.cart = response.data;
//       $scope.subtotal = 0;
//       cartTotal();
//     }).catch((err) => {
//       console.log(err);
//     });
// };
