angular.module('grovemade').directive('navbar', () => {
  return{
    templateUrl: './templates/navbar.html',
    controller: function($state, $rootScope){

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
        // isActive = !isActive;
      	// if (isActive) {
          // console.log(isActive);
          $('.newsletter-wrapper').removeClass('hide-newsletter');
      	// } else {
      		// $('.newsletter-wrapper').addClass('hide-newsletter');
      	// }

      });

      $('.newsletter-close').on('click', function() {
        // isActive = !isActive;
      	// if (!isActive) {
          $('.newsletter-wrapper').addClass('hide-newsletter');
      	// } else {
      		// $('.newsletter-wrapper').removeClass('hide-newsletter');
      	// }
      });

      $('.nav-cart').on('mouseover',function(){
        $('.sticky-cart').fadeIn();
      })
      $('.sticky-cart').mouseleave(function(){
        $('.sticky-cart').fadeOut();
      })

    }//end of controller
  };
});
