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

      var isActive = false;

      $('.newsletter-open').on('click', function () {
        if (isActive) {
          $('.newsletter-wrapper').removeClass('hide-newsletter');
        } else {
          $('.newsletter-wrapper').addClass('hide-newsletter');
        }
        isActive = !isActive;
      });

      $('.newsletter-close').on('click', function () {
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
'use strict';

angular.module('grovemade').directive('newsletter', function () {
  return {
    templateUrl: './templates/newsletter.html',
    controller: function controller($state) {}
  };
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2Fib3V0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2Nhcm91c2VsQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvam91cm5hbEN0cmwuanMiLCJjb250cm9sbGVycy9zaG9wQ3RybC5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9ob21lRGlyZWN0aXZlLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJkaXJlY3RpdmVzL25ld3NsZXR0ZXIuanMiLCJzZXJ2aWNlcy9ob21lU2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRzdGF0ZVBhcmFtcyIsIiRpbnRlcnZhbCIsIiR0aW1lb3V0IiwibXlJbnRlcnZhbCIsImluZGV4Iiwic2xpZGVzIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbG9yIiwicGhvdG9DbGFzcyIsInRpbWVyIiwibmV4dCIsInN0b3AiLCJjYW5jZWwiLCJuZXh0UGhvdG8iLCJuZXh0VGl0bGUiLCJuZXh0Q29sb3IiLCJzcGxpY2UiLCJzZWxlY3RlZCIsInByZXZpb3VzIiwiZGlyZWN0aXZlIiwiJHN0YXRlIiwiJHJvb3RTY29wZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicmVtb3ZlQ2xhc3MiLCJzY3JvbGxfcG9zIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJpc0FjdGl2ZSIsIm9uIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0QixDQUFDLFdBQUQsQ0FBNUIsRUFDQ0MsTUFERCxDQUNRLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERBLHFCQUFtQkMs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T0FQRDs7QUFTQVIsUUFBRSxtQkFBRixFQUF1QlMsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBVztBQUM3QyxZQUFJRCxRQUFKLEVBQWM7QUFDWFIsWUFBRSxxQkFBRixFQUF5Qk8sUUFBekIsQ0FBa0MsaUJBQWxDO0FBQ0YsU0FGRCxNQUVPO0FBQ05QLFlBQUUscUJBQUYsRUFBeUJHLFdBQXpCLENBQXFDLGlCQUFyQztBQUNBO0FBQ0RLLG1CQUFXLENBQUNBLFFBQVo7QUFDQSxPQVBEO0FBVUQ7QUFyQ0csR0FBTjtBQXVDRCxDQXhDRDs7O0FDQUExQyxRQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0QjhCLFNBQTVCLENBQXNDLFlBQXRDLEVBQW9ELFlBQU07QUFDeEQsU0FBTTtBQUNKdkIsaUJBQWEsNkJBRFQ7QUFFSkMsZ0JBQVksb0JBQVN1QixNQUFULEVBQWdCLENBRTNCO0FBSkcsR0FBTjtBQU1ELENBUEQ7QUNBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJywgWyd1aS5yb3V0ZXInXSlcclxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKXtcclxuXHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXHJcblxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgLnN0YXRlKCdob21lJywge1xyXG4gICAgdXJsOicvJyxcclxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjonaG9tZUN0cmwnXHJcbiAgfSlcclxuXHJcbiAgLnN0YXRlKCdzaG9wJywge1xyXG4gICAgdXJsOicvc2hvcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvc2hvcC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6J3Nob3BDdHJsJ1xyXG4gIH0pXHJcblxyXG4gIC5zdGF0ZSgnYWJvdXQnLCB7XHJcbiAgICB1cmw6Jy9hYm91dCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvYWJvdXQuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOidhYm91dEN0cmwnXHJcbiAgfSlcclxuXHJcbiAgLnN0YXRlKCdqb3VybmFsJywge1xyXG4gICAgdXJsOicvam91cm5hbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvam91cm5hbC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6J2pvdXJuYWxDdHJsJ1xyXG4gIH0pXHJcblxyXG5cclxufSlcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXHJcbi5jb250cm9sbGVyKCdhYm91dEN0cmwnLCBmdW5jdGlvbigkc2NvcGUpe1xyXG5cclxufSlcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXHJcbi5jb250cm9sbGVyKCdjYXJvdXNlbEN0cmwnLCBmdW5jdGlvbigkc2NvcGUpe1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0pXHJcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxyXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcywgJGludGVydmFsLCAkdGltZW91dCl7XHJcbiAgICAkc2NvcGUubXlJbnRlcnZhbCA9IDMwMDA7XHJcbiAgICB2YXIgaW5kZXggPSAtMTtcclxuICAgICRzY29wZS5zbGlkZXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd2FsbnV0LWRlc2stY29sbGVjdGlvbi1HMl8xLmpwZycsXHJcbiAgICAgICAgdGl0bGU6ICdERVNLIENPTExFQ1RJT04nLFxyXG4gICAgICAgIGNvbG9yOiAnSU4gV0FMTlVUIE9SIE1BUExFJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdhdGNoLTAyLUEzXzEuanBnJyxcclxuICAgICAgICB0aXRsZTogJ1dPT0QgV0FUQ0gnLFxyXG4gICAgICAgIGNvbG9yOiAnTU9ERUwgMDInXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd2FsbGV0LUE0XzEuanBnJyxcclxuICAgICAgICB0aXRsZTogJ0VWRVJZREFZIENBUlJZJyxcclxuICAgICAgICBjb2xvcjogJ0NPTExFQ1RJT04nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd2FsbGV0LWNhc2UtQTJfMS5qcGcnLFxyXG4gICAgICAgIHRpdGxlOiAnV0FMTEVUIENBU0UnLFxyXG4gICAgICAgIGNvbG9yOiAnRk9SIGlQSE9ORSA2ICYgNydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13b29kLWlwaG9uZS02LWNhc2UtQjJfMS5qcGcnLFxyXG4gICAgICAgIHRpdGxlOiAnaVBIT05FICAgNyBDQVNFUycsXHJcbiAgICAgICAgY29sb3I6ICdJTiBXQUxOVVQgT1IgTUFQTEUnXHJcblxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLWJpZm9sZC13YWxsZXQtRTFfMS5qcGcnLFxyXG4gICAgICAgIHRpdGxlOiAnQklGT0xEIFdBTExFVCcsXHJcbiAgICAgICAgY29sb3I6ICdJTiBCTEFDSyBPUiBUQU4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd29vZC1zcGVha2Vycy1BMV8yLmpwZycsXHJcbiAgICAgICAgdGl0bGU6ICdXT09EIFNQRUFLRVJTJyxcclxuICAgICAgICBjb2xvcjogJ0lOIFdBTE5VVCBPUiBNQVBMRSdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgICRzY29wZS5waG90b0NsYXNzID0gW11cclxuICAgIHZhciB0aW1lciA9ICRpbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAkc2NvcGUubmV4dCgpXHJcbiAgICB9LCA1MDAwKVxyXG4gICAgJHNjb3BlLnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgICAkaW50ZXJ2YWwuY2FuY2VsKHRpbWVyKVxyXG4gICAgfVxyXG4gICAgJHNjb3BlLm5leHQgPSBmdW5jdGlvbigpe1xyXG4gICAgICBpbmRleCsrXHJcbiAgICAgIGlmKGluZGV4ID4gNil7XHJcbiAgICAgICAgaW5kZXggPSAwXHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLm5leHRQaG90byA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmltYWdlXHJcbiAgICAgICRzY29wZS5uZXh0VGl0bGUgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS50aXRsZVxyXG4gICAgICAkc2NvcGUubmV4dENvbG9yID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uY29sb3JcclxuXHJcbiAgICAgICRzY29wZS5waG90b0NsYXNzLnNwbGljZSgwLCAxLCAnYW5pbWF0ZWQgZmFkZU91dCcpXHJcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJHNjb3BlLnBob3RvQ2xhc3Muc3BsaWNlKDAsIDEsICdhbmltYXRlZCBmYWRlSW4nKVxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZCA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmltYWdlXHJcbiAgICAgICAgJHNjb3BlLnRpdGxlID0gJHNjb3BlLnNsaWRlc1tpbmRleF0udGl0bGVcclxuICAgICAgICAkc2NvcGUuY29sb3IgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5jb2xvclxyXG4gICAgICB9LCA1MDApXHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnByZXZpb3VzID0gZnVuY3Rpb24oKXtcclxuICAgICAgaW5kZXgtLVxyXG4gICAgICBpZihpbmRleCA8IDApe1xyXG4gICAgICAgIGluZGV4ID0gNlxyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5uZXh0UGhvdG8gPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxyXG4gICAgICAkc2NvcGUubmV4dFRpdGxlID0gJHNjb3BlLnNsaWRlc1tpbmRleF0udGl0bGVcclxuICAgICAgJHNjb3BlLm5leHRDb2xvciA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmNvbG9yXHJcblxyXG4gICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVPdXQnKVxyXG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICRzY29wZS5waG90b0NsYXNzLnNwbGljZSgwLCAxLCAnYW5pbWF0ZWQgZmFkZUluJylcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxyXG4gICAgICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLnRpdGxlXHJcbiAgICAgICAgJHNjb3BlLmNvbG9yID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uY29sb3JcclxuICAgICAgfSwgNTAwKVxyXG4gICAgfVxyXG4gICAgJHNjb3BlLm5leHQoKVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXHJcbi5jb250cm9sbGVyKCdqb3VybmFsQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSl7XHJcblxyXG59KVxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcclxuLmNvbnRyb2xsZXIoJ3Nob3BDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcclxuXHJcbn0pXHJcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKS5kaXJlY3RpdmUoJ2N1c3RvbWZvb3RlcicsICgpID0+IHtcclxuICByZXR1cm4oe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlcy9mb290ZXIuaHRtbCcsXHJcbiAgfSlcclxuXHJcbn0pXHJcbiIsIlxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJykuZGlyZWN0aXZlKCduYXZiYXInLCAoKSA9PiB7XHJcbiAgcmV0dXJue1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlcy9uYXZiYXIuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc3RhdGUsICRyb290U2NvcGUpe1xyXG4gICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5uYXYnKS5yZW1vdmVDbGFzcygnc3RpY2t5LW5hdicpO1xyXG4gICAgICAgIHZhciBzY3JvbGxfcG9zID0gMDtcclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbF9wb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBpZihzY3JvbGxfcG9zID4gMjApIHtcclxuICAgICAgICAgICAgICAkKCcubmF2JykuYWRkQ2xhc3MoJ3N0aWNreS1uYXYnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ3N0aWNreS1uYXYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgJCgnLm5ld3NsZXR0ZXItb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBcdGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgJCgnLm5ld3NsZXR0ZXItd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdoaWRlLW5ld3NsZXR0ZXInKTtcclxuICAgICAgXHR9IGVsc2Uge1xyXG4gICAgICBcdFx0JCgnLm5ld3NsZXR0ZXItd3JhcHBlcicpLmFkZENsYXNzKCdoaWRlLW5ld3NsZXR0ZXInKTtcclxuICAgICAgXHR9XHJcbiAgICAgIFx0aXNBY3RpdmUgPSAhaXNBY3RpdmU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJCgnLm5ld3NsZXR0ZXItY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgXHRpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5hZGRDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XHJcbiAgICAgIFx0fSBlbHNlIHtcclxuICAgICAgXHRcdCQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XHJcbiAgICAgIFx0fVxyXG4gICAgICBcdGlzQWN0aXZlID0gIWlzQWN0aXZlO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJykuZGlyZWN0aXZlKCduZXdzbGV0dGVyJywgKCkgPT4ge1xyXG4gIHJldHVybntcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZXMvbmV3c2xldHRlci5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzdGF0ZSl7XHJcblxyXG4gICAgfVxyXG4gIH07XHJcbn0pO1xyXG4iLCIiXX0=
