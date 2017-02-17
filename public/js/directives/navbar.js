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

      var isActive = false;

      $('.newsletter-open').on('click', function() {
      	if (isActive) {
          $('.newsletter-wrapper').removeClass('hide-newsletter');
      	} else {
      		$('.newsletter-wrapper').addClass('hide-newsletter');
      	}
      	isActive = !isActive;
      });

      $('.newsletter-close').on('click', function() {
      	if (isActive) {
          $('.newsletter-wrapper').addClass('hide-newsletter');
      	} else {
      		$('.newsletter-wrapper').removeClass('hide-newsletter');
      	}
      	isActive = !isActive;
      });


    }
  };
});
