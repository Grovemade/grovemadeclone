angular.module('grovemade').directive('cartnav', () => {
  return {
    restrict: 'AE',
    template: "({{totalItems}})",
    scope: {},
    controller: ($scope, homeSrvc, $rootScope, $state) => {

      // $rootScope.$watch('cartTotal', function(){
      //   console.log('it changed');
      //   console.log($rootScope.cartTotal);
      //   $scope.totalItems = $rootScope.cartTotal
      // });

    }
  }

}); //end of directive
