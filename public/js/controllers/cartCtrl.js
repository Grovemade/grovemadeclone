angular.module('grovemade')
.controller('cartCtrl', ($scope, homeSrvc, $stateParams, $rootScope) => {

  $scope.subtotal = 0;
  $scope.cart;

  let cartSubtotal = () => {
    // console.log('running cartTotal', $scope.cart);
    if (!$scope.cart || $scope.cart.length === 0) {
      $scope.cart = [];
      $scope.subtotal = 0;
    } else {
      $scope.cart.forEach((element, index) => {
        // console.log('EACH', element);
        $scope.subtotal += parseInt(element.size.price) * parseInt(element.productQuantity);
        // console.log('SUBTOTAL', $scope.subtotal);
      });
    };
  };

  let findTotalItems = () => {
    $scope.totalItems = 0;
    for (let i = 0; i < $scope.cart.length; i++) {
      $scope.totalItems += Number($scope.cart[i].productQuantity);
    }
    console.log($scope.totalItems);
    return $scope.totalItems;
  };

  homeSrvc.getCart().then((response) => {
    $scope.cart = response.data;
    console.log('Cart CTRL', $scope.cart);
    console.log('size', $scope.cart.size);
    cartSubtotal();
  }).catch((err) => {
    console.log(err);
  });

  $scope.updateQuantity = (item) => {
    $rootScope.cartTotal = findTotalItems();
    // console.log('UPDATE THIS', item)
    homeSrvc.updateQuantity(item.productId, item.productQuantity);
      homeSrvc.getCart().then((response) => {
        $scope.cart = response.data;
        // console.log($scope.cart);
        $scope.subtotal = 0;
        cartSubtotal();
      }).catch((err) => {
        console.log(err);
      });
  };

  $scope.removeFromCart = (item) => {
    $rootScope.cartTotal = findTotalItems();
    // console.log('remove CTRL', item)
    homeSrvc.removeFromCart(item).then(() => {
      homeSrvc.getCart().then((response) => {
        $scope.cart = response.data;
        $scope.subtotal = 0;
        cartSubtotal();
        $rootScope.cartTotal = findTotalItems();
      }).catch((err) => {
        console.log(err);
      });
    });
  };

  var handler = StripeCheckout.configure({
    key: 'pk_test_6065FRM1a4tbwIiofznTSYu4',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
      console.log('CTRL Token', token)
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      homeSrvc.postOrder(token, $scope.subtotal*100, $scope.cart);
    }
  });

  document.getElementById('custombutton').addEventListener('click', function(e) {
    // Open Checkout with further options:
    handler.open({
      name: 'GROVEMADE',
      description: 'Find What Matters',
      shippingAddress: true,
      billingAddress: true,
      zipCode: true,
      amount: $scope.subtotal * 100
    });
    e.preventDefault();
  });

  // Close Checkout on page navigation:
  window.addEventListener('popstate', function() {
    handler.close();
  });

}); //end of controller
