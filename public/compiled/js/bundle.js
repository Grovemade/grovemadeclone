'use strict';

angular.module('grovemade', ['ui.router', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider) {

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
    title: 'testing'
  }, {
    image: '/img/homemarq-watch-02-A3_1.jpg'
  }, {
    image: '/img/homemarq-wallet-A4_1.jpg'
  }, {
    image: '/img/homemarq-wallet-case-A2_1.jpg'
  }, {
    image: '/img/homemarq-wood-iphone-6-case-B2_1.jpg'
  }, {
    image: '/img/homemarq-bifold-wallet-E1_1.jpg'
  }, {
    image: '/img/homemarq-wood-speakers-A1_2.jpg'
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
    $scope.photoClass.splice(0, 1, 'animated fadeOut');
    $timeout(function () {
      $scope.photoClass.splice(0, 1, 'animated fadeIn');
      $scope.selected = $scope.slides[index].image;
      $scope.title = $scope.slides[index].title;
    }, 750);
  };

  $scope.previous = function () {
    index--;
    if (index < 0) {
      index = 6;
    }
    $scope.photoClass.splice(0, 1, 'animated fadeOut');
    $timeout(function () {
      $scope.photoClass.splice(0, 1, 'animated fadeIn');
      $scope.selected = $scope.slides[index].image;
      $scope.title = $scope.slides[index].title;
    }, 750);
  };
  $scope.next();
});
'use strict';

angular.module('grovemade').controller('journalCtrl', function ($scope) {});
'use strict';

angular.module('grovemade').controller('shopCtrl', function ($scope) {});
"use strict";
'use strict';

angular.module('grovemade').directive('navbar', function () {
  return {
    templateUrl: './templates/navbar.html'
  };
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2Fib3V0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2Nhcm91c2VsQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvam91cm5hbEN0cmwuanMiLCJjb250cm9sbGVycy9zaG9wQ3RybC5qcyIsImRpcmVjdGl2ZXMvaG9tZURpcmVjdGl2ZS5qcyIsImRpcmVjdGl2ZXMvbmF2YmFyLmpzIiwic2VydmljZXMvaG9tZVNlcnZpY2UuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkc3RhdGVQYXJhbXMiLCIkaW50ZXJ2YWwiLCIkdGltZW91dCIsIm15SW50ZXJ2YWwiLCJpbmRleCIsInNsaWRlcyIsImltYWdlIiwidGl0bGUiLCJwaG90b0NsYXNzIiwidGltZXIiLCJuZXh0Iiwic3RvcCIsImNhbmNlbCIsInNwbGljZSIsInNlbGVjdGVkIiwicHJldmlvdXMiLCJkaXJlY3RpdmUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLENBQUMsV0FBRCxFQUFhLGNBQWIsQ0FBNUIsRUFDQ0MsTUFERCxDQUNRLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERBLHFCQUFtQkMsU0FBbkIsQ0FBNkIsR0FBN0I7O0FBRUFGLGlCQUNDRyxLQURELENBQ08sTUFEUCxFQUNlO0FBQ2JDLFNBQUksR0FEUztBQUViQyxpQkFBWSx1QkFGQztBQUdiQyxnQkFBVztBQUhFLEdBRGYsRUFPQ0gsS0FQRCxDQU9PLE1BUFAsRUFPZTtBQUNiQyxTQUFJLE9BRFM7QUFFYkMsaUJBQVksdUJBRkM7QUFHYkMsZ0JBQVc7QUFIRSxHQVBmLEVBYUNILEtBYkQsQ0Fh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QUFSLENBQWUsV0FBZixFQUNDUSxVQURELENBQ1ksVUFEWixFQUN3QixVQUFTQyxNQUFULEVBQWdCLENBRXZDLENBSEQ7QUNBQTs7O0FDQUFWLFFBQVFDLE1BQVIsQ0FBZSxXQUFmLEVBQTRCMEIsU0FBNUIsQ0FBc0MsUUFBdEMsRUFBZ0QsWUFBTTtBQUNwRCxTQUFPO0FBQ0xuQixpQkFBYTtBQURSLEdBQVA7QUFJRCxDQUxEO0FDQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScsIFsndWkucm91dGVyJywndWkuYm9vdHN0cmFwJ10pXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxuXG4gICRzdGF0ZVByb3ZpZGVyXG4gIC5zdGF0ZSgnaG9tZScsIHtcbiAgICB1cmw6Jy8nLFxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J2hvbWVDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnc2hvcCcsIHtcbiAgICB1cmw6Jy9zaG9wJyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvc2hvcC5odG1sJyxcbiAgICBjb250cm9sbGVyOidzaG9wQ3RybCdcbiAgfSlcblxuICAuc3RhdGUoJ2Fib3V0Jywge1xuICAgIHVybDonL2Fib3V0JyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvYWJvdXQuaHRtbCcsXG4gICAgY29udHJvbGxlcjonYWJvdXRDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnam91cm5hbCcsIHtcbiAgICB1cmw6Jy9qb3VybmFsJyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvam91cm5hbC5odG1sJyxcbiAgICBjb250cm9sbGVyOidqb3VybmFsQ3RybCdcbiAgfSlcblxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXG4uY29udHJvbGxlcignYWJvdXRDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxuLmNvbnRyb2xsZXIoJ2Nhcm91c2VsQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSl7XG5cblxuXG5cbiAgICB9KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXG4uY29udHJvbGxlcignaG9tZUN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcywgJGludGVydmFsLCAkdGltZW91dCl7XG4gICAgJHNjb3BlLm15SW50ZXJ2YWwgPSAzMDAwO1xuICAgIHZhciBpbmRleCA9IC0xO1xuICAgICRzY29wZS5zbGlkZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YWxudXQtZGVzay1jb2xsZWN0aW9uLUcyXzEuanBnJyxcbiAgICAgICAgdGl0bGU6ICd0ZXN0aW5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdhdGNoLTAyLUEzXzEuanBnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdhbGxldC1BNF8xLmpwZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YWxsZXQtY2FzZS1BMl8xLmpwZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13b29kLWlwaG9uZS02LWNhc2UtQjJfMS5qcGcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtYmlmb2xkLXdhbGxldC1FMV8xLmpwZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13b29kLXNwZWFrZXJzLUExXzIuanBnJ1xuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLnBob3RvQ2xhc3MgPSBbXVxuICAgIHZhciB0aW1lciA9ICRpbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgJHNjb3BlLm5leHQoKVxuICAgIH0sIDUwMDApXG4gICAgJHNjb3BlLnN0b3AgPSBmdW5jdGlvbigpe1xuICAgICAgJGludGVydmFsLmNhbmNlbCh0aW1lcilcbiAgICB9XG4gICAgJHNjb3BlLm5leHQgPSBmdW5jdGlvbigpe1xuICAgICAgaW5kZXgrK1xuICAgICAgaWYoaW5kZXggPiA2KXtcbiAgICAgICAgaW5kZXggPSAwXG4gICAgICB9XG4gICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVPdXQnKVxuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgJHNjb3BlLnBob3RvQ2xhc3Muc3BsaWNlKDAsIDEsICdhbmltYXRlZCBmYWRlSW4nKVxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxuICAgICAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS50aXRsZVxuICAgICAgfSwgNzUwKVxuICAgIH1cblxuICAgICRzY29wZS5wcmV2aW91cyA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbmRleC0tXG4gICAgICBpZihpbmRleCA8IDApe1xuICAgICAgICBpbmRleCA9IDZcbiAgICAgIH1cbiAgICAgICRzY29wZS5waG90b0NsYXNzLnNwbGljZSgwLCAxLCAnYW5pbWF0ZWQgZmFkZU91dCcpXG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVJbicpXG4gICAgICAgICRzY29wZS5zZWxlY3RlZCA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmltYWdlXG4gICAgICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLnRpdGxlXG5cbiAgICAgIH0sIDc1MClcbiAgICB9XG4gICAgJHNjb3BlLm5leHQoKVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcbi5jb250cm9sbGVyKCdqb3VybmFsQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSl7XG5cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcbi5jb250cm9sbGVyKCdzaG9wQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSl7XG5cbn0pXG4iLCJcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKS5kaXJlY3RpdmUoJ25hdmJhcicsICgpID0+IHtcbiAgcmV0dXJuKHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL25hdmJhci5odG1sJyxcbiAgfSlcblxufSlcbiIsIiJdfQ==
