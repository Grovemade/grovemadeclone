'use strict';

angular.module('grovemade', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './templates/home.html',
    controller: 'homeCtrl'
  }).state('shop', {
    url: '/shop',
    templateUrl: './templates/shop.html',
    controller: 'shopCtrl'
  }).state('about', {
    url: '/about',
    templateUrl: './templates/about.html',
    controller: 'aboutCtrl'
  }).state('journal', {
    url: '/journal',
    templateUrl: './templates/journal.html',
    controller: 'journalCtrl'
  });
});
"use strict";
'use strict';

angular.module('grovemade').controller('aboutCtrl', function ($scope) {});
'use strict';

angular.module('grovemade').controller('carouselCtrl', function ($scope) {});
'use strict';

angular.module('grovemade').controller('homeCtrl', function ($scope, $stateParams, $interval, $timeout) {
  $scope.myInterval = 3000;
  var index = -1;
  $scope.slides = [{
    image: '/img/homemarq-walnut-desk-collection-G2_1.jpg',
    title: 'DESK COLLECTION',
    color: 'IN WALNUT OR MAPLE'
  }, {
    image: '/img/homemarq-watch-02-A3_1.jpg',
    title: 'WOOD WATCH',
    color: 'MODEL 02'
  }, {
    image: '/img/homemarq-wallet-A4_1.jpg',
    title: 'EVERYDAY CARRY',
    color: 'COLLECTION'
  }, {
    image: '/img/homemarq-wallet-case-A2_1.jpg',
    title: 'WALLET CASE',
    color: 'FOR iPHONE 6 & 7'
  }, {
    image: '/img/homemarq-wood-iphone-6-case-B2_1.jpg',
    title: 'iPHONE   7 CASES',
    color: 'IN WALNUT OR MAPLE'

  }, {
    image: '/img/homemarq-bifold-wallet-E1_1.jpg',
    title: 'BIFOLD WALLET',
    color: 'IN BLACK OR TAN'
  }, {
    image: '/img/homemarq-wood-speakers-A1_2.jpg',
    title: 'WOOD SPEAKERS',
    color: 'IN WALNUT OR MAPLE'
  }];
  $scope.photoClass = [];
  var timer = $interval(function () {
    $scope.next();
  }, 5000);
  $scope.stop = function () {
    $interval.cancel(timer);
  };
  $scope.next = function () {
    index++;
    if (index > 6) {
      index = 0;
    }
    $scope.nextPhoto = $scope.slides[index].image;
    $scope.nextTitle = $scope.slides[index].title;
    $scope.nextColor = $scope.slides[index].color;

    $scope.photoClass.splice(0, 1, 'animated fadeOut');
    $timeout(function () {
      $scope.photoClass.splice(0, 1, 'animated fadeIn');
      $scope.selected = $scope.slides[index].image;
      $scope.title = $scope.slides[index].title;
      $scope.color = $scope.slides[index].color;
    }, 500);
  };

  $scope.previous = function () {
    index--;
    if (index < 0) {
      index = 6;
    }
    $scope.nextPhoto = $scope.slides[index].image;
    $scope.nextTitle = $scope.slides[index].title;
    $scope.nextColor = $scope.slides[index].color;

    $scope.photoClass.splice(0, 1, 'animated fadeOut');
    $timeout(function () {
      $scope.photoClass.splice(0, 1, 'animated fadeIn');
      $scope.selected = $scope.slides[index].image;
      $scope.title = $scope.slides[index].title;
      $scope.color = $scope.slides[index].color;
    }, 500);
  };
  $scope.next();
});
'use strict';

angular.module('grovemade').controller('journalCtrl', function ($scope) {});
'use strict';

angular.module('grovemade').controller('shopCtrl', function ($scope) {});
'use strict';

angular.module('grovemade').directive('customfooter', function () {
  return {
    templateUrl: './templates/footer.html'
  };
});
"use strict";
'use strict';

angular.module('grovemade').directive('navbar', function () {
  return {
    templateUrl: './templates/navbar.html',
    controller: function controller($state, $rootScope) {
      $(document).ready(function () {
        $('.nav').removeClass('sticky-nav');
        var scroll_pos = 0;
        $(document).scroll(function () {
          scroll_pos = $(this).scrollTop();
          if (scroll_pos > 20) {
            $('.nav').addClass('sticky-nav');
          } else {
            $('.nav').removeClass('sticky-nav');
          }
        });
      });

      // var isActive = false;

      $('.newsletter-open').on('click', function () {
        // isActive = !isActive;
        // if (isActive) {
        // console.log(isActive);
        $('.newsletter-wrapper').removeClass('hide-newsletter');
        // } else {
        // $('.newsletter-wrapper').addClass('hide-newsletter');
        // }
      });

      $('.newsletter-close').on('click', function () {
        // isActive = !isActive;
        // if (!isActive) {
        $('.newsletter-wrapper').addClass('hide-newsletter');
        // } else {
        // $('.newsletter-wrapper').removeClass('hide-newsletter');
        // }
      });

      $('.nav-cart').on('mouseover', function () {
        $('.sticky-cart').fadeIn();
      });
      $('.sticky-cart').mouseleave(function () {
        $('.sticky-cart').fadeOut();
      });
    } //end of controller
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNlcnZpY2VzL2hvbWVTZXJ2aWNlLmpzIiwiY29udHJvbGxlcnMvYWJvdXRDdHJsLmpzIiwiY29udHJvbGxlcnMvY2Fyb3VzZWxDdHJsLmpzIiwiY29udHJvbGxlcnMvaG9tZUN0cmwuanMiLCJjb250cm9sbGVycy9qb3VybmFsQ3RybC5qcyIsImNvbnRyb2xsZXJzL3Nob3BDdHJsLmpzIiwiZGlyZWN0aXZlcy9mb290ZXIuanMiLCJkaXJlY3RpdmVzL2hvbWVEaXJlY3RpdmUuanMiLCJkaXJlY3RpdmVzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRzdGF0ZVBhcmFtcyIsIiRpbnRlcnZhbCIsIiR0aW1lb3V0IiwibXlJbnRlcnZhbCIsImluZGV4Iiwic2xpZGVzIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbG9yIiwicGhvdG9DbGFzcyIsInRpbWVyIiwibmV4dCIsInN0b3AiLCJjYW5jZWwiLCJuZXh0UGhvdG8iLCJuZXh0VGl0bGUiLCJuZXh0Q29sb3IiLCJzcGxpY2UiLCJzZWxlY3RlZCIsInByZXZpb3VzIiwiZGlyZWN0aXZlIiwiJHN0YXRlIiwiJHJvb3RTY29wZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicmVtb3ZlQ2xhc3MiLCJzY3JvbGxfcG9zIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJvbiIsImZhZGVJbiIsIm1vdXNlbGVhdmUiLCJmYWRlT3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0QixDQUFDLFdBQUQsQ0FBNUIsRUFDQ0MsTUFERCxDQUNRLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERBLHFCQUFtQkMsU0FBbkIsQ0FBNkIsR0FBN0I7O0FBRUFGLGlCQUNDRyxLQURELENBQ08sTUFEUCxFQUNlO0FBQ2JDLFNBQUksR0FEUztBQUViQyxpQkFBWSx1QkFGQztBQUdiQyxnQkFBVztBQUhFLEdBRGYsRUFPQ0gsS0FQRCxDQU9PLE1BUFAsRUFPZTtBQUNiQyxTQUFJLE9BRFM7QUFFYkMsaUJBQVksdUJBRkM7QUFHYkMsZ0JBQVc7QUFIRSxHQVBmLEVBYUNILEtBYkQsQ0FhTyxPQWJQLEVBYWdCO0FBQ2RDLFNBQUksUUFEVTtBQUVkQyxpQkFBWSx3QkFGRTtBQUdkQyxnQkFBVztBQUhHLEdBYmhCLEVBbUJDSCxLQW5CRCxDQW1CTyxTQW5CUCxFQW1Ca0I7QUFDaEJDLFNBQUksVUFEWTtBQUVoQkMsaUJBQVksMEJBRkk7QUFHaEJDLGdCQUFXO0FBSEssR0FuQmxCO0FBMEJELENBL0JEO0FDQUE7OztBQ0FBVCxRQUFRQyxNQUFSLENBQWUsV0FBZixFQUNDUSxVQURELENBQ1ksV0FEWixFQUN5QixVQUFTQyxNQUFULEVBQWdCLENBRXhDLENBSEQ7OztBQ0FBVixRQUFRQyxNQUFSLENBQWUsV0FBZixFQUNDUSxVQURELENBQ1ksY0FEWixFQUM0QixVQUFTQyxNQUFULEVBQWdCLENBS3ZDLENBTkw7OztBQ0FBVixRQUFRQyxNQUFSLENBQWUsV0FBZixFQUNDUSxVQURELENBQ1ksVUFEWixFQUN3QixVQUFTQyxNQUFULEVBQWlCQyxZQUFqQixFQUErQkMsU0FBL0IsRUFBMENDLFFBQTFDLEVBQW1EO0FBQ3ZFSCxTQUFPSSxVQUFQLEdBQW9CLElBQXBCO0FBQ0EsTUFBSUMsUUFBUSxDQUFDLENBQWI7QUFDQUwsU0FBT00sTUFBUCxHQUFnQixDQUNkO0FBQ0VDLFdBQU8sK0NBRFQ7QUFFRUMsV0FBTyxpQkFGVDtBQUdFQyxXQUFPO0FBSFQsR0FEYyxFQU1kO0FBQ0VGLFdBQU8saUNBRFQ7QUFFRUMsV0FBTyxZQUZUO0FBR0VDLFdBQU87QUFIVCxHQU5jLEVBV2Q7QUFDRUYsV0FBTywrQkFEVDtBQUVFQyxXQUFPLGdCQUZUO0FBR0VDLFdBQU87QUFIVCxHQVhjLEVBZ0JkO0FBQ0VGLFdBQU8sb0NBRFQ7QUFFRUMsV0FBTyxhQUZUO0FBR0VDLFdBQU87QUFIVCxHQWhCYyxFQXFCZDtBQUNFRixXQUFPLDJDQURUO0FBRUVDLFdBQU8sa0JBRlQ7QUFHRUMsV0FBTzs7QUFIVCxHQXJCYyxFQTJCZDtBQUNFRixXQUFPLHNDQURUO0FBRUVDLFdBQU8sZUFGVDtBQUdFQyxXQUFPO0FBSFQsR0EzQmMsRUFnQ2Q7QUFDRUYsV0FBTyxzQ0FEVDtBQUVFQyxXQUFPLGVBRlQ7QUFHRUMsV0FBTztBQUhULEdBaENjLENBQWhCO0FBc0NBVCxTQUFPVSxVQUFQLEdBQW9CLEVBQXBCO0FBQ0EsTUFBSUMsUUFBUVQsVUFBVSxZQUFVO0FBQzlCRixXQUFPWSxJQUFQO0FBQ0QsR0FGVyxFQUVULElBRlMsQ0FBWjtBQUdBWixTQUFPYSxJQUFQLEdBQWMsWUFBVTtBQUN0QlgsY0FBVVksTUFBVixDQUFpQkgsS0FBakI7QUFDRCxHQUZEO0FBR0FYLFNBQU9ZLElBQVAsR0FBYyxZQUFVO0FBQ3RCUDtBQUNBLFFBQUdBLFFBQVEsQ0FBWCxFQUFhO0FBQ1hBLGNBQVEsQ0FBUjtBQUNEO0FBQ0RMLFdBQU9lLFNBQVAsR0FBbUJmLE9BQU9NLE1BQVAsQ0FBY0QsS0FBZCxFQUFxQkUsS0FBeEM7QUFDQVAsV0FBT2dCLFNBQVAsR0FBbUJoQixPQUFPTSxNQUFQLENBQWNELEtBQWQsRUFBcUJHLEtBQXhDO0FBQ0FSLFdBQU9pQixTQUFQLEdBQW1CakIsT0FBT00sTUFBUCxDQUFjRCxLQUFkLEVBQXFCSSxLQUF4Qzs7QUFFQVQsV0FBT1UsVUFBUCxDQUFrQlEsTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0Isa0JBQS9CO0FBQ0FmLGFBQVMsWUFBVTtBQUNqQkgsYUFBT1UsVUFBUCxDQUFrQlEsTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsaUJBQS9CO0FBQ0FsQixhQUFPbUIsUUFBUCxHQUFrQm5CLE9BQU9NLE1BQVAsQ0FBY0QsS0FBZCxFQUFxQkUsS0FBdkM7QUFDQVAsYUFBT1EsS0FBUCxHQUFlUixPQUFPTSxNQUFQLENBQWNELEtBQWQsRUFBcUJHLEtBQXBDO0FBQ0FSLGFBQU9TLEtBQVAsR0FBZVQsT0FBT00sTUFBUCxDQUFjRCxLQUFkLEVBQXFCSSxLQUFwQztBQUNELEtBTEQsRUFLRyxHQUxIO0FBTUQsR0FoQkQ7O0FBa0JBVCxTQUFPb0IsUUFBUCxHQUFrQixZQUFVO0FBQzFCZjtBQUNBLFFBQUdBLFFBQVEsQ0FBWCxFQUFhO0FBQ1hBLGNBQVEsQ0FBUjtBQUNEO0FBQ0RMLFdBQU9lLFNBQVAsR0FBbUJmLE9BQU9NLE1BQVAsQ0FBY0QsS0FBZCxFQUFxQkUsS0FBeEM7QUFDQVAsV0FBT2dCLFNBQVAsR0FBbUJoQixPQUFPTSxNQUFQLENBQWNELEtBQWQsRUFBcUJHLEtBQXhDO0FBQ0FSLFdBQU9pQixTQUFQLEdBQW1CakIsT0FBT00sTUFBUCxDQUFjRCxLQUFkLEVBQXFCSSxLQUF4Qzs7QUFFQVQsV0FBT1UsVUFBUCxDQUFrQlEsTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0Isa0JBQS9CO0FBQ0FmLGFBQVMsWUFBVTtBQUNqQkgsYUFBT1UsVUFBUCxDQUFrQlEsTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsaUJBQS9CO0FBQ0FsQixhQUFPbUIsUUFBUCxHQUFrQm5CLE9BQU9NLE1BQVAsQ0FBY0QsS0FBZCxFQUFxQkUsS0FBdkM7QUFDQVAsYUFBT1EsS0FBUCxHQUFlUixPQUFPTSxNQUFQLENBQWNELEtBQWQsRUFBcUJHLEtBQXBDO0FBQ0FSLGFBQU9TLEtBQVAsR0FBZVQsT0FBT00sTUFBUCxDQUFjRCxLQUFkLEVBQXFCSSxLQUFwQztBQUNELEtBTEQsRUFLRyxHQUxIO0FBTUQsR0FoQkQ7QUFpQkFULFNBQU9ZLElBQVA7QUFDSCxDQXJGRDs7O0FDQUF0QixRQUFRQyxNQUFSLENBQWUsV0FBZixFQUNDUSxVQURELENBQ1ksYUFEWixFQUMyQixVQUFTQyxNQUFULEVBQWdCLENBRTFDLENBSEQ7OztBQ0FBVixRQUFRQyxNQUFSLENBQWUsV0FBZixFQUNDUSxVQURELENBQ1ksVUFEWixFQUN3QixVQUFTQyxNQUFULEVBQWdCLENBRXZDLENBSEQ7OztBQ0FBVixRQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0QjhCLFNBQTVCLENBQXNDLGNBQXRDLEVBQXNELFlBQU07QUFDMUQsU0FBTztBQUNMdkIsaUJBQWE7QUFEUixHQUFQO0FBTUQsQ0FQRDtBQ0FBOzs7QUNBQVIsUUFBUUMsTUFBUixDQUFlLFdBQWYsRUFBNEI4QixTQUE1QixDQUFzQyxRQUF0QyxFQUFnRCxZQUFNO0FBQ3BELFNBQU07QUFDSnZCLGlCQUFhLHlCQURUO0FBRUpDLGdCQUFZLG9CQUFTdUIsTUFBVCxFQUFpQkMsVUFBakIsRUFBNEI7QUFDdENDLFFBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFVO0FBQzFCRixVQUFFLE1BQUYsRUFBVUcsV0FBVixDQUFzQixZQUF0QjtBQUNBLFlBQUlDLGFBQWEsQ0FBakI7QUFDQUosVUFBRUMsUUFBRixFQUFZSSxNQUFaLENBQW1CLFlBQVc7QUFDMUJELHVCQUFhSixFQUFFLElBQUYsRUFBUU0sU0FBUixFQUFiO0FBQ0EsY0FBR0YsYUFBYSxFQUFoQixFQUFvQjtBQUNsQkosY0FBRSxNQUFGLEVBQVVPLFFBQVYsQ0FBbUIsWUFBbkI7QUFDRCxXQUZELE1BRU87QUFDTFAsY0FBRSxNQUFGLEVBQVVHLFdBQVYsQ0FBc0IsWUFBdEI7QUFDRDtBQUNKLFNBUEQ7QUFRRCxPQVhEOztBQWFBOztBQUVBSCxRQUFFLGtCQUFGLEVBQXNCUSxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFXO0FBQzNDO0FBQ0Q7QUFDRztBQUNBUixVQUFFLHFCQUFGLEVBQXlCRyxXQUF6QixDQUFxQyxpQkFBckM7QUFDSDtBQUNDO0FBQ0Q7QUFFQSxPQVREOztBQVdBSCxRQUFFLG1CQUFGLEVBQXVCUSxFQUF2QixDQUEwQixPQUExQixFQUFtQyxZQUFXO0FBQzVDO0FBQ0Q7QUFDR1IsVUFBRSxxQkFBRixFQUF5Qk8sUUFBekIsQ0FBa0MsaUJBQWxDO0FBQ0g7QUFDQztBQUNEO0FBQ0EsT0FQRDs7QUFTQVAsUUFBRSxXQUFGLEVBQWVRLEVBQWYsQ0FBa0IsV0FBbEIsRUFBOEIsWUFBVTtBQUN0Q1IsVUFBRSxjQUFGLEVBQWtCUyxNQUFsQjtBQUNELE9BRkQ7QUFHQVQsUUFBRSxjQUFGLEVBQWtCVSxVQUFsQixDQUE2QixZQUFVO0FBQ3JDVixVQUFFLGNBQUYsRUFBa0JXLE9BQWxCO0FBQ0QsT0FGRDtBQUlELEtBN0NHLENBNkNIO0FBN0NHLEdBQU47QUErQ0QsQ0FoREQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScsIFsndWkucm91dGVyJ10pXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxuXG4gICRzdGF0ZVByb3ZpZGVyXG4gIC5zdGF0ZSgnaG9tZScsIHtcbiAgICB1cmw6Jy8nLFxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J2hvbWVDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnc2hvcCcsIHtcbiAgICB1cmw6Jy9zaG9wJyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvc2hvcC5odG1sJyxcbiAgICBjb250cm9sbGVyOidzaG9wQ3RybCdcbiAgfSlcblxuICAuc3RhdGUoJ2Fib3V0Jywge1xuICAgIHVybDonL2Fib3V0JyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvYWJvdXQuaHRtbCcsXG4gICAgY29udHJvbGxlcjonYWJvdXRDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnam91cm5hbCcsIHtcbiAgICB1cmw6Jy9qb3VybmFsJyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvam91cm5hbC5odG1sJyxcbiAgICBjb250cm9sbGVyOidqb3VybmFsQ3RybCdcbiAgfSlcblxuXG59KVxuIiwiIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXG4uY29udHJvbGxlcignYWJvdXRDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxuLmNvbnRyb2xsZXIoJ2Nhcm91c2VsQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSl7XG5cblxuXG5cbiAgICB9KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcywgJGludGVydmFsLCAkdGltZW91dCl7XG4gICAgJHNjb3BlLm15SW50ZXJ2YWwgPSAzMDAwO1xuICAgIHZhciBpbmRleCA9IC0xO1xuICAgICRzY29wZS5zbGlkZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YWxudXQtZGVzay1jb2xsZWN0aW9uLUcyXzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICdERVNLIENPTExFQ1RJT04nLFxuICAgICAgICBjb2xvcjogJ0lOIFdBTE5VVCBPUiBNQVBMRSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YXRjaC0wMi1BM18xLmpwZycsXG4gICAgICAgIHRpdGxlOiAnV09PRCBXQVRDSCcsXG4gICAgICAgIGNvbG9yOiAnTU9ERUwgMDInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd2FsbGV0LUE0XzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICdFVkVSWURBWSBDQVJSWScsXG4gICAgICAgIGNvbG9yOiAnQ09MTEVDVElPTidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YWxsZXQtY2FzZS1BMl8xLmpwZycsXG4gICAgICAgIHRpdGxlOiAnV0FMTEVUIENBU0UnLFxuICAgICAgICBjb2xvcjogJ0ZPUiBpUEhPTkUgNiAmIDcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd29vZC1pcGhvbmUtNi1jYXNlLUIyXzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICdpUEhPTkUgICA3IENBU0VTJyxcbiAgICAgICAgY29sb3I6ICdJTiBXQUxOVVQgT1IgTUFQTEUnXG5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS1iaWZvbGQtd2FsbGV0LUUxXzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICdCSUZPTEQgV0FMTEVUJyxcbiAgICAgICAgY29sb3I6ICdJTiBCTEFDSyBPUiBUQU4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd29vZC1zcGVha2Vycy1BMV8yLmpwZycsXG4gICAgICAgIHRpdGxlOiAnV09PRCBTUEVBS0VSUycsXG4gICAgICAgIGNvbG9yOiAnSU4gV0FMTlVUIE9SIE1BUExFJ1xuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLnBob3RvQ2xhc3MgPSBbXVxuICAgIHZhciB0aW1lciA9ICRpbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgJHNjb3BlLm5leHQoKVxuICAgIH0sIDUwMDApXG4gICAgJHNjb3BlLnN0b3AgPSBmdW5jdGlvbigpe1xuICAgICAgJGludGVydmFsLmNhbmNlbCh0aW1lcilcbiAgICB9XG4gICAgJHNjb3BlLm5leHQgPSBmdW5jdGlvbigpe1xuICAgICAgaW5kZXgrK1xuICAgICAgaWYoaW5kZXggPiA2KXtcbiAgICAgICAgaW5kZXggPSAwXG4gICAgICB9XG4gICAgICAkc2NvcGUubmV4dFBob3RvID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uaW1hZ2VcbiAgICAgICRzY29wZS5uZXh0VGl0bGUgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS50aXRsZVxuICAgICAgJHNjb3BlLm5leHRDb2xvciA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmNvbG9yXG5cbiAgICAgICRzY29wZS5waG90b0NsYXNzLnNwbGljZSgwLCAxLCAnYW5pbWF0ZWQgZmFkZU91dCcpXG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVJbicpXG4gICAgICAgICRzY29wZS5zZWxlY3RlZCA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmltYWdlXG4gICAgICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLnRpdGxlXG4gICAgICAgICRzY29wZS5jb2xvciA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmNvbG9yXG4gICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgJHNjb3BlLnByZXZpb3VzID0gZnVuY3Rpb24oKXtcbiAgICAgIGluZGV4LS1cbiAgICAgIGlmKGluZGV4IDwgMCl7XG4gICAgICAgIGluZGV4ID0gNlxuICAgICAgfVxuICAgICAgJHNjb3BlLm5leHRQaG90byA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmltYWdlXG4gICAgICAkc2NvcGUubmV4dFRpdGxlID0gJHNjb3BlLnNsaWRlc1tpbmRleF0udGl0bGVcbiAgICAgICRzY29wZS5uZXh0Q29sb3IgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5jb2xvclxuXG4gICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVPdXQnKVxuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgJHNjb3BlLnBob3RvQ2xhc3Muc3BsaWNlKDAsIDEsICdhbmltYXRlZCBmYWRlSW4nKVxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxuICAgICAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS50aXRsZVxuICAgICAgICAkc2NvcGUuY29sb3IgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5jb2xvclxuICAgICAgfSwgNTAwKVxuICAgIH1cbiAgICAkc2NvcGUubmV4dCgpXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxuLmNvbnRyb2xsZXIoJ2pvdXJuYWxDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxuLmNvbnRyb2xsZXIoJ3Nob3BDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKS5kaXJlY3RpdmUoJ2N1c3RvbWZvb3RlcicsICgpID0+IHtcbiAgcmV0dXJuKHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL2Zvb3Rlci5odG1sJyxcbiAgfSlcblxuXG5cbn0pXG4iLCJcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJue1xuICAgIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZXMvbmF2YmFyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzdGF0ZSwgJHJvb3RTY29wZSl7XG4gICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ3N0aWNreS1uYXYnKTtcbiAgICAgICAgdmFyIHNjcm9sbF9wb3MgPSAwO1xuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY3JvbGxfcG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIGlmKHNjcm9sbF9wb3MgPiAyMCkge1xuICAgICAgICAgICAgICAkKCcubmF2JykuYWRkQ2xhc3MoJ3N0aWNreS1uYXYnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICQoJy5uYXYnKS5yZW1vdmVDbGFzcygnc3RpY2t5LW5hdicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyB2YXIgaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgJCgnLm5ld3NsZXR0ZXItb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcbiAgICAgIFx0Ly8gaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaXNBY3RpdmUpO1xuICAgICAgICAgICQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XG4gICAgICBcdC8vIH0gZWxzZSB7XG4gICAgICBcdFx0Ly8gJCgnLm5ld3NsZXR0ZXItd3JhcHBlcicpLmFkZENsYXNzKCdoaWRlLW5ld3NsZXR0ZXInKTtcbiAgICAgIFx0Ly8gfVxuXG4gICAgICB9KTtcblxuICAgICAgJCgnLm5ld3NsZXR0ZXItY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gaXNBY3RpdmUgPSAhaXNBY3RpdmU7XG4gICAgICBcdC8vIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICAkKCcubmV3c2xldHRlci13cmFwcGVyJykuYWRkQ2xhc3MoJ2hpZGUtbmV3c2xldHRlcicpO1xuICAgICAgXHQvLyB9IGVsc2Uge1xuICAgICAgXHRcdC8vICQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XG4gICAgICBcdC8vIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKCcubmF2LWNhcnQnKS5vbignbW91c2VvdmVyJyxmdW5jdGlvbigpe1xuICAgICAgICAkKCcuc3RpY2t5LWNhcnQnKS5mYWRlSW4oKTtcbiAgICAgIH0pXG4gICAgICAkKCcuc3RpY2t5LWNhcnQnKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5zdGlja3ktY2FydCcpLmZhZGVPdXQoKTtcbiAgICAgIH0pXG5cbiAgICB9Ly9lbmQgb2YgY29udHJvbGxlclxuICB9O1xufSk7XG4iXX0=
