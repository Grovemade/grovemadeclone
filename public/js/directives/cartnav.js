angular.module('grovemade').directive('cartnav', () => {
  return {
    restrict: 'AE',
    template: "<span class='nav-cart-total'>{{totalItems}}</span>",
    scope: {},
    controller: ($scope, homeSrvc, $rootScope, $state) => {

      $rootScope.cartTotal = 0;

      $rootScope.$watch('cartTotal', function(){
        // console.log('it changed');
        // console.log($rootScope.cartTotal);
        $scope.totalItems = $rootScope.cartTotal
      });

    }
  }

}); //end of directive
