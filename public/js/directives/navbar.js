angular.module('grovemade').directive('navbar', () => {
  return{
    templateUrl: './templates/navbar.html',

    controller: function($state, $rootScope, $scope, homeSrvc){

      $(document).ready(function(){
        $('.nav').removeClass('sticky-nav');
        var scroll_pos = 0;
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 20) {
              $('.nav').addClass('sticky-nav');
            } else {
              $('.nav').removeClass('sticky-nav');
            }
        });
      });

      $('.newsletter-open').on('click', function() {
          $('.newsletter-wrapper').removeClass('hide-newsletter');
      });

      $('.newsletter-close').on('click', function() {
          $('.newsletter-wrapper').addClass('hide-newsletter');
      });

      $('.nav-cart').on('mouseover',function(){
        $('.sticky-cart').fadeIn();
      })
      $('.sticky-cart').mouseleave(function(){
        $('.sticky-cart').fadeOut();
      })

      $scope.submitEmail = function(email){
        // console.log(email);
        homeSrvc.submitEmail(email).then(function(response){
          // console.log(response.data);
        });
      };

    }//end of controller
  };
});
