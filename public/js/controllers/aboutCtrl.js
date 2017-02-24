angular.module('grovemade')
.controller('aboutCtrl', ($scope, homeSrvc, $stateParams, $timeout) => {
  window.scrollTo(0, 0);

  homeSrvc.getAboutPage().then((response) => {
    $scope.employees = response.data;
    console.log('CTRL', $scope.employees);
  })

  $scope.showEmployee=function(id){
    homeSrvc.getAttributes(id).then(function(res){
      $scope.attributes = res.data;
      console.log(res.data);
    })
  }

  $scope.hideEmployee = function() {
    $scope.selected = -1
    for(var i = 6; i < 18; i++){
      $('#test' + i).removeClass('moveDown animated slideInDown')
    }
    $('.our-story').removeClass('moveDown animated slideInDown')
  }

  $scope.showDeets = function(i){
      $scope.selected = i
    if(i < 6){
   $('html, body').animate({
       scrollTop: $("body").offset().top + 1850
   }, 800);
   for(var j = 6; j < 12; j++){
     console.log('first');
     $('#test' + j).addClass('moveDown animated slideInDown')
   }
   for(var j = 12; j < 18; j++){
     console.log('second', j);
     $('#test' + j).removeClass('moveDown')
   }
    $('.our-story').removeClass('moveDown animated slideInDown')
    }
    else if(i > 5 && i < 12){
      $('html, body').animate({
          scrollTop: $("body").offset().top + 2140
      }, 800);
      for(var x = 12; x < 18; x++){
        $('#test' + x).addClass('moveDown animated slideInDown')
      }
      for(var x = 6; x < 12; x++){
        $('#test' + x).removeClass('moveDown')
      }
      $('our-story').removeClass('moveDown animated slideInDown')
      }
    else{
      $('html, body').animate({
          scrollTop: $("body").offset().top + 2430
      }, 800);
      for(var z = 6; z < 18; z++) {
        $('#test' + z).removeClass('moveDown')
      }
        $('.our-story').addClass('moveDown animated slideInDown')
    }
  }

  $(document).on("mouseover", "#employee-hover", function() {
    $(this).addClass('animated fadeOut')
  });
  $(document).on("mouseleave", "#employee-hover", function() {
    $(this).removeClass('animated fadeOut')
    $(this).addClass('animated fadeIn')
  })

});
