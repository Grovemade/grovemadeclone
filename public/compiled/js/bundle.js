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

angular.module('grovemade').controller('journalCtrl', function ($scope, homeSrvc, $stateParams) {

  homeSrvc.getJournal().then(function (response) {
    $scope.journal = response.data;
    console.log('CTRL', $scope.journal);
  });
});
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
'use strict';

angular.module('grovemade').service('homeSrvc', function ($http) {

  this.getJournal = function () {
    return $http({
      method: 'GET',
      url: '/journal'
    }).then(function (response) {
      console.log('SRVC', response);
      return response;
    });
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2Fib3V0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2Nhcm91c2VsQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvam91cm5hbEN0cmwuanMiLCJjb250cm9sbGVycy9zaG9wQ3RybC5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9ob21lRGlyZWN0aXZlLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJkaXJlY3RpdmVzL25ld3NsZXR0ZXIuanMiLCJzZXJ2aWNlcy9ob21lU2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRzdGF0ZVBhcmFtcyIsIiRpbnRlcnZhbCIsIiR0aW1lb3V0IiwibXlJbnRlcnZhbCIsImluZGV4Iiwic2xpZGVzIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbG9yIiwicGhvdG9DbGFzcyIsInRpbWVyIiwibmV4dCIsInN0b3AiLCJjYW5jZWwiLCJuZXh0UGhvdG8iLCJuZXh0VGl0bGUiLCJuZXh0Q29sb3IiLCJzcGxpY2UiLCJzZWxlY3RlZCIsInByZXZpb3VzIiwiaG9tZVNydmMiLCJnZXRKb3VybmFsIiwidGhlbiIsInJlc3BvbnNlIiwiam91cm5hbCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGlyZWN0aXZlIiwiJHN0YXRlIiwiJHJvb3RTY29wZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicmVtb3ZlQ2xhc3MiLCJzY3JvbGxfcG9zIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJpc0FjdGl2ZSIsIm9uIiwic2VydmljZSIsIiRodHRwIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFR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QVksTUFBWixFQUFvQkosUUFBcEI7QUFDQSxhQUFPQSxRQUFQO0FBQ0QsS0FOTSxDQUFQO0FBT0QsR0FSRDtBQVVELENBWkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScsIFsndWkucm91dGVyJ10pXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxuXG4gICRzdGF0ZVByb3ZpZGVyXG4gIC5zdGF0ZSgnaG9tZScsIHtcbiAgICB1cmw6Jy8nLFxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J2hvbWVDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnc2hvcCcsIHtcbiAgICB1cmw6Jy9zaG9wJyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvc2hvcC5odG1sJyxcbiAgICBjb250cm9sbGVyOidzaG9wQ3RybCdcbiAgfSlcblxuICAuc3RhdGUoJ2Fib3V0Jywge1xuICAgIHVybDonL2Fib3V0JyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvYWJvdXQuaHRtbCcsXG4gICAgY29udHJvbGxlcjonYWJvdXRDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnam91cm5hbCcsIHtcbiAgICB1cmw6Jy9qb3VybmFsJyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvam91cm5hbC5odG1sJyxcbiAgICBjb250cm9sbGVyOidqb3VybmFsQ3RybCdcbiAgfSlcblxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXG4uY29udHJvbGxlcignYWJvdXRDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxuLmNvbnRyb2xsZXIoJ2Nhcm91c2VsQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSl7XG5cblxuXG5cbiAgICB9KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcywgJGludGVydmFsLCAkdGltZW91dCl7XG4gICAgJHNjb3BlLm15SW50ZXJ2YWwgPSAzMDAwO1xuICAgIHZhciBpbmRleCA9IC0xO1xuICAgICRzY29wZS5zbGlkZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YWxudXQtZGVzay1jb2xsZWN0aW9uLUcyXzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICdERVNLIENPTExFQ1RJT04nLFxuICAgICAgICBjb2xvcjogJ0lOIFdBTE5VVCBPUiBNQVBMRSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YXRjaC0wMi1BM18xLmpwZycsXG4gICAgICAgIHRpdGxlOiAnV09PRCBXQVRDSCcsXG4gICAgICAgIGNvbG9yOiAnTU9ERUwgMDInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd2FsbGV0LUE0XzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICdFVkVSWURBWSBDQVJSWScsXG4gICAgICAgIGNvbG9yOiAnQ09MTEVDVElPTidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YWxsZXQtY2FzZS1BMl8xLmpwZycsXG4gICAgICAgIHRpdGxlOiAnV0FMTEVUIENBU0UnLFxuICAgICAgICBjb2xvcjogJ0ZPUiBpUEhPTkUgNiAmIDcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd29vZC1pcGhvbmUtNi1jYXNlLUIyXzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICdpUEhPTkUgICA3IENBU0VTJyxcbiAgICAgICAgY29sb3I6ICdJTiBXQUxOVVQgT1IgTUFQTEUnXG5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS1iaWZvbGQtd2FsbGV0LUUxXzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICdCSUZPTEQgV0FMTEVUJyxcbiAgICAgICAgY29sb3I6ICdJTiBCTEFDSyBPUiBUQU4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd29vZC1zcGVha2Vycy1BMV8yLmpwZycsXG4gICAgICAgIHRpdGxlOiAnV09PRCBTUEVBS0VSUycsXG4gICAgICAgIGNvbG9yOiAnSU4gV0FMTlVUIE9SIE1BUExFJ1xuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLnBob3RvQ2xhc3MgPSBbXVxuICAgIHZhciB0aW1lciA9ICRpbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgJHNjb3BlLm5leHQoKVxuICAgIH0sIDUwMDApXG4gICAgJHNjb3BlLnN0b3AgPSBmdW5jdGlvbigpe1xuICAgICAgJGludGVydmFsLmNhbmNlbCh0aW1lcilcbiAgICB9XG4gICAgJHNjb3BlLm5leHQgPSBmdW5jdGlvbigpe1xuICAgICAgaW5kZXgrK1xuICAgICAgaWYoaW5kZXggPiA2KXtcbiAgICAgICAgaW5kZXggPSAwXG4gICAgICB9XG4gICAgICAkc2NvcGUubmV4dFBob3RvID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uaW1hZ2VcbiAgICAgICRzY29wZS5uZXh0VGl0bGUgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS50aXRsZVxuICAgICAgJHNjb3BlLm5leHRDb2xvciA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmNvbG9yXG5cbiAgICAgICRzY29wZS5waG90b0NsYXNzLnNwbGljZSgwLCAxLCAnYW5pbWF0ZWQgZmFkZU91dCcpXG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVJbicpXG4gICAgICAgICRzY29wZS5zZWxlY3RlZCA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmltYWdlXG4gICAgICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLnRpdGxlXG4gICAgICAgICRzY29wZS5jb2xvciA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmNvbG9yXG4gICAgICB9LCA1MDApXG4gICAgfVxuXG4gICAgJHNjb3BlLnByZXZpb3VzID0gZnVuY3Rpb24oKXtcbiAgICAgIGluZGV4LS1cbiAgICAgIGlmKGluZGV4IDwgMCl7XG4gICAgICAgIGluZGV4ID0gNlxuICAgICAgfVxuICAgICAgJHNjb3BlLm5leHRQaG90byA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmltYWdlXG4gICAgICAkc2NvcGUubmV4dFRpdGxlID0gJHNjb3BlLnNsaWRlc1tpbmRleF0udGl0bGVcbiAgICAgICRzY29wZS5uZXh0Q29sb3IgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5jb2xvclxuXG4gICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVPdXQnKVxuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgJHNjb3BlLnBob3RvQ2xhc3Muc3BsaWNlKDAsIDEsICdhbmltYXRlZCBmYWRlSW4nKVxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxuICAgICAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS50aXRsZVxuICAgICAgICAkc2NvcGUuY29sb3IgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5jb2xvclxuICAgICAgfSwgNTAwKVxuICAgIH1cbiAgICAkc2NvcGUubmV4dCgpXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxuLmNvbnRyb2xsZXIoJ2pvdXJuYWxDdHJsJywgKCRzY29wZSwgaG9tZVNydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG5cbiAgaG9tZVNydmMuZ2V0Sm91cm5hbCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgJHNjb3BlLmpvdXJuYWwgPSByZXNwb25zZS5kYXRhO1xuICAgIGNvbnNvbGUubG9nKCdDVFJMJywgJHNjb3BlLmpvdXJuYWwpO1xuICB9KVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcbi5jb250cm9sbGVyKCdzaG9wQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSl7XG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJykuZGlyZWN0aXZlKCdjdXN0b21mb290ZXInLCAoKSA9PiB7XG4gIHJldHVybih7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlcy9mb290ZXIuaHRtbCcsXG4gIH0pXG5cbn0pXG4iLCJcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJue1xuICAgIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZXMvbmF2YmFyLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzdGF0ZSwgJHJvb3RTY29wZSl7XG4gICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ3N0aWNreS1uYXYnKTtcbiAgICAgICAgdmFyIHNjcm9sbF9wb3MgPSAwO1xuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY3JvbGxfcG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIGlmKHNjcm9sbF9wb3MgPiAyMCkge1xuICAgICAgICAgICAgICAkKCcubmF2JykuYWRkQ2xhc3MoJ3N0aWNreS1uYXYnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICQoJy5uYXYnKS5yZW1vdmVDbGFzcygnc3RpY2t5LW5hdicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgJCgnLm5ld3NsZXR0ZXItb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgXHRpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAkKCcubmV3c2xldHRlci13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGUtbmV3c2xldHRlcicpO1xuICAgICAgXHR9IGVsc2Uge1xuICAgICAgXHRcdCQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5hZGRDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XG4gICAgICBcdH1cbiAgICAgIFx0aXNBY3RpdmUgPSAhaXNBY3RpdmU7XG4gICAgICB9KTtcblxuICAgICAgJCgnLm5ld3NsZXR0ZXItY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIFx0aWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgJCgnLm5ld3NsZXR0ZXItd3JhcHBlcicpLmFkZENsYXNzKCdoaWRlLW5ld3NsZXR0ZXInKTtcbiAgICAgIFx0fSBlbHNlIHtcbiAgICAgIFx0XHQkKCcubmV3c2xldHRlci13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGUtbmV3c2xldHRlcicpO1xuICAgICAgXHR9XG4gICAgICBcdGlzQWN0aXZlID0gIWlzQWN0aXZlO1xuICAgICAgfSk7XG5cblxuICAgIH1cbiAgfTtcbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpLmRpcmVjdGl2ZSgnbmV3c2xldHRlcicsICgpID0+IHtcbiAgcmV0dXJue1xuICAgIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZXMvbmV3c2xldHRlci5odG1sJyxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc3RhdGUpe1xuXG4gICAgfVxuICB9O1xufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJykuc2VydmljZSgnaG9tZVNydmMnLCBmdW5jdGlvbigkaHR0cCkge1xuXG4gIHRoaXMuZ2V0Sm91cm5hbCA9ICgpID0+IHtcbiAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9qb3VybmFsJ1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU1JWQycsIHJlc3BvbnNlKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KVxuICB9XG5cbn0pO1xuIl19
