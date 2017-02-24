angular.module('grovemade')
.controller('journalCtrl', ($scope, homeSrvc, $stateParams) => {


  homeSrvc.getJournal().then((response) => {
    $scope.journal = response.data;
    console.log('CTRL', $scope.journal);
  })
  // upon hover, the selected index is pushing the animate.css  fade to the covering array
$scope.covering = [];
$scope.onHover = function(i){
  $scope.selected = i
  $scope.covering.push('cover animated fadeIn2')
}
// upon mouse leave, the selected index we are on will take away the animate.css
$scope.onLeave = function(i){
  $scope.selected = i
  $scope.covering.splice(0)
}

});
