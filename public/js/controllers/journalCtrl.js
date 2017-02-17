angular.module('grovemade')
.controller('journalCtrl', ($scope, homeSrvc, $stateParams) => {


  homeSrvc.getJournal().then((response) => {
    $scope.journal = response.data;
    console.log('CTRL', $scope.journal);
  })
});
