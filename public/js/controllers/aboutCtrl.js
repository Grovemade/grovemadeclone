angular.module('grovemade')
.controller('aboutCtrl', ($scope, homeSrvc, $stateParams) => {

  homeSrvc.getAboutPage().then((response) => {
    $scope.employees = response.data;
    console.log('CTRL', $scope.employees);

  })


  $scope.showEmployee=function(id){
    console.log(id);
    homeSrvc.getAttributes(id).then(function(res){
      $scope.attributes = res.data;
      console.log(res.data);
    })


  }




});
