angular.module('grovemade')
.controller('shopCtrl', ($scope, homeSrvc, $stateParams) => {

  homeSrvc.getShop().then((response) => {
    $scope.products = response.data;
  });

  $(document).on("mouseover", "#unique", function() {
    $(this).addClass('animated fadeOut')
  });
  $(document).on("mouseleave", "#unique", function() {
    $(this).removeClass('animated fadeOut')
    $(this).addClass('animated fadeIn')
  });

  // $(document).on("mouseover", ".product-link", function() {
  //   $('#info').addClass('reveal animated fadeIn')
  //   $('#info').removeClass('hidden')
  // });
  // $(document).on("mouseleave", ".product-link", function() {
  //   $('#info').removeClass('reveal animated fadeIn ')
  //   $('#info').addClass('hidden animated fadeOut')
  // });

});
