angular.module('grovemade').directive('customfooter', () => {
  return({
    templateUrl: './templates/footer.html',
    // the controller is for the arrow button to take us to the top of the page
    controller: function($scope){
      $scope.scrollTop = function(){
      window.scrollTo(0, 0)
    }
    }
})
})
