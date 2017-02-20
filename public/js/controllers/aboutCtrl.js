angular.module('grovemade')
.controller('aboutCtrl', ($scope, homeSrvc, $stateParams) => {

  homeSrvc.getAboutPage().then((response) => {
    $scope.employees = response.data;
    console.log('CTRL', $scope.employees);
  })
});
