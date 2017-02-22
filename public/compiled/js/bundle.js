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
  }).state('1', {
    url: '/journal/desk-ergonomics',
    templateUrl: './templates/desk-ergonomics.html',
    controller: 'journalCtrl'
  }).state('2', {
    url: '/journal/love-your-work',
    templateUrl: './templates/love-your-work.html',
    controller: 'journalCtrl'
  }).state('3', {
    url: '/journal/designing-the-wood-watch-02',
    templateUrl: './templates/designing-the-wood-watch-02.html',
    controller: 'journalCtrl'
  });
});
'use strict';

angular.module('grovemade').controller('aboutCtrl', function ($scope, homeSrvc, $stateParams) {

  homeSrvc.getAboutPage().then(function (response) {
    $scope.employees = response.data;
    console.log('CTRL', $scope.employees);
  });

  $scope.showEmployee = function (id) {
    console.log(id);
    homeSrvc.getAttributes(id).then(function (res) {
      $scope.attributes = res.data;
      console.log(res.data);
    });
  };
});
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
  // upon hover, the selected index is pushing the animate.css  fade to the covering array
  $scope.covering = [];
  $scope.onHover = function (i) {
    $scope.selected = i;
    $scope.covering.push('cover animated fadeIn2');
  };
  // upon mouse leave, the selected index we are on will take away the animate.css
  $scope.onLeave = function (i) {
    $scope.selected = i;
    $scope.covering.splice(0);
  };
});
'use strict';

angular.module('grovemade').controller('shopCtrl', function ($scope, homeSrvc, $stateParams) {

  homeSrvc.getShop().then(function (response) {
    $scope.products = response.data;
    console.log('CTRL', $scope.products);
  });

  $(document).on("mouseover", "#unique", function() {
    $(this).addClass('animated fadeOut')
  });
  $(document).on("mouseleave", "#unique", function() {
    $(this).removeClass('animated fadeOut')
    $(this).addClass('animated fadeIn')
  });

});
'use strict';

angular.module('grovemade').directive('customfooter', function () {
  return {
    templateUrl: './templates/footer.html',
    // the controller is for the arrow button to take us to the top of the page
    controller: function controller($scope) {
      $scope.scrollTop = function () {
        window.scrollTo(0, 0);
      };
    }
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
'use strict';

angular.module('grovemade').service('homeSrvc', function ($http) {

  this.getShop = function () {
    return $http({
      method: 'GET',
      url: '/shop'
    }).then(function (response) {
      console.log('SRVC', response);
      return response;
    });
  };

  this.getAboutPage = function () {
    return $http({
      method: 'GET',
      url: '/about'
    }).then(function (response) {
      console.log('SRVC', response);
      return response;
    });
  };

  this.getJournal = function () {
    return $http({
      method: 'GET',
      url: '/journal'
    }).then(function (response) {
      console.log('SRVC', response);
      return response;
    });
  };

  this.getAttributes = function (id) {
    return $http({
      method: 'GET',
      url: '/attributes/' + id
    });
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2Fib3V0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2Nhcm91c2VsQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvam91cm5hbEN0cmwuanMiLCJjb250cm9sbGVycy9zaG9wQ3RybC5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9ob21lRGlyZWN0aXZlLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJzZXJ2aWNlcy9ob21lU2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIiRzY29wZSIsImhvbWVTcnZjIiwiJHN0YXRlUGFyYW1zIiwiZ2V0QWJvdXRQYWdlIiwidGhlbiIsInJlc3BvbnNlIiwiZW1wbG95ZWVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG93RW1wbG95ZWUiLCJpZCIsImdldEF0dHJpYnV0ZXMiLCJyZXMiLCJhdHRyaWJ1dGVzIiwiJGludGVydmFsIiwiJHRpbWVvdXQiLCJteUludGVydmFsIiwiaW5kZXgiLCJzbGlkZXMiLCJpbWFnZSIsInRpdGxlIiwiY29sb3IiLCJwaG90b0NsYXNzIiwidGltZXIiLCJuZXh0Iiwic3RvcCIsImNhbmNlbCIsIm5leHRQaG90byIsIm5leHRUaXRsZSIsIm5leHRDb2xvciIsInNwbGljZSIsInNlbGVjdGVkIiwicHJldmlvdXMiLCJnZXRKb3VybmFsIiwiam91cm5hbCIsImNvdmVyaW5nIiwib25Ib3ZlciIsImkiLCJwdXNoIiwib25MZWF2ZSIsImdldFNob3AiLCJwcm9kdWN0cyIsImRpcmVjdGl2ZSIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwiJHN0YXRlIiwiJHJvb3RTY29wZSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicmVtb3ZlQ2xhc3MiLCJzY3JvbGxfcG9zIiwic2Nyb2xsIiwiYWRkQ2xhc3MiLCJvbiIsImZhZGVJbiIsIm1vdXNlbGVhdmUiLCJmYWRlT3V0Iiwic2VydmljZSIsIiRodHRwIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0QixDQUFDLFdBQUQsQ0FBNUIsRUFDQ0MsTUFERCxDQUNRLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERBLHFCQUFtQkMsU0FBbkIsQ0FBNkIsR0FBN0I7O0FBRUFGLGlCQUNDRyxLQURELENBQ08sTUFEUCxFQUNlO0FBQ2JDLFNBQUksR0FEUztBQUViQyxpQkFBWSx1QkFGQztBQUdiQyxnQkFBVztBQUhFLEdBRGYsRUFPQ0gsS0FQRCxDQU9PLE1BUFAsRUFPZTtBQUNiQyxTQUFJLE9BRFM7QUFFYkMsaUJBQVksdUJBRkM7QUFHYkMsZ0JBQVc7QUFIRSxHQVBmLEVBYUNILEtBYkQsQ0FhTyxPQWJQLEVBYWdCO0FBQ2RDLFNBQUksUUFEVTtBQUVkQyxpQkFBWSx3QkFGRTtBQUdkQyxnQkFBVztBQUhHLEdBYmhCLEVBbUJDSCxLQW5CRCxDQW1CTyxTQW5CUCxFQW1Ca0I7QUFDaEJDLFNBQUksVUFEWTtBQUVoQkMsaUJBQVksMEJBRkk7QUFHaEJDLGdCQUFXO0FBSEssR0FuQmxCLEVBeUJDSCxLQXpCRCxDQXlCTyxHQXpCUCxFQXlCWTtBQUNWQyxTQUFJLDBCQURNO0FBRVZDLGlCQUFZLGtDQUZGO0FBR1ZDLGdCQUFXO0FBSEQsR0F6QlosRUErQkNILEtBL0JELENBK0JPLEdBL0JQLEVBK0JZO0FBQ1ZDLFNBQUkseUJBRE07QUFFVkMsaUJBQVksaUNBRkY7QUFHVkMsZ0JBQVc7QUFIRCxHQS9CWixFQXFDQ0gsS0FyQ0QsQ0FxQ08sR0FyQ1AsRUFxQ1k7QUFDVkMsU0FBSSxzQ0FETTtBQUVWQyxpQkFBWSw4Q0FGRjtBQUdWQyxnQkFBVztBQUhELEdBckNaO0FBNkNE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QUFLTyxhQUFMLEdBQXFCLFVBQUNELEVBQUQsRUFBUTtBQUMzQixXQUFPa0QsTUFBTTtBQUNYQyxjQUFRLEtBREc7QUFFWGpFLFdBQUssaUJBQWlCYztBQUZYLEtBQU4sQ0FBUDtBQUlELEdBTEQ7QUFRRCxDQXhDRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJywgWyd1aS5yb3V0ZXInXSlcclxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKXtcclxuXHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXHJcblxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgLnN0YXRlKCdob21lJywge1xyXG4gICAgdXJsOicvJyxcclxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjonaG9tZUN0cmwnXHJcbiAgfSlcclxuXHJcbiAgLnN0YXRlKCdzaG9wJywge1xyXG4gICAgdXJsOicvc2hvcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvc2hvcC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6J3Nob3BDdHJsJ1xyXG4gIH0pXHJcblxyXG4gIC5zdGF0ZSgnYWJvdXQnLCB7XHJcbiAgICB1cmw6Jy9hYm91dCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvYWJvdXQuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOidhYm91dEN0cmwnXHJcbiAgfSlcclxuXHJcbiAgLnN0YXRlKCdqb3VybmFsJywge1xyXG4gICAgdXJsOicvam91cm5hbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvam91cm5hbC5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6J2pvdXJuYWxDdHJsJ1xyXG4gIH0pXHJcblxyXG4gIC5zdGF0ZSgnMScsIHtcclxuICAgIHVybDonL2pvdXJuYWwvZGVzay1lcmdvbm9taWNzJyxcclxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9kZXNrLWVyZ29ub21pY3MuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOidqb3VybmFsQ3RybCdcclxuICB9KVxyXG5cclxuICAuc3RhdGUoJzInLCB7XHJcbiAgICB1cmw6Jy9qb3VybmFsL2xvdmUteW91ci13b3JrJyxcclxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9sb3ZlLXlvdXItd29yay5odG1sJyxcclxuICAgIGNvbnRyb2xsZXI6J2pvdXJuYWxDdHJsJ1xyXG4gIH0pXHJcblxyXG4gIC5zdGF0ZSgnMycsIHtcclxuICAgIHVybDonL2pvdXJuYWwvZGVzaWduaW5nLXRoZS13b29kLXdhdGNoLTAyJyxcclxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9kZXNpZ25pbmctdGhlLXdvb2Qtd2F0Y2gtMDIuaHRtbCcsXHJcbiAgICBjb250cm9sbGVyOidqb3VybmFsQ3RybCdcclxuICB9KVxyXG5cclxuXHJcblxyXG59KVxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcclxuLmNvbnRyb2xsZXIoJ2Fib3V0Q3RybCcsICgkc2NvcGUsIGhvbWVTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcclxuXHJcbiAgaG9tZVNydmMuZ2V0QWJvdXRQYWdlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICRzY29wZS5lbXBsb3llZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgY29uc29sZS5sb2coJ0NUUkwnLCAkc2NvcGUuZW1wbG95ZWVzKTtcclxuXHJcbiAgfSlcclxuXHJcblxyXG4gICRzY29wZS5zaG93RW1wbG95ZWU9ZnVuY3Rpb24oaWQpe1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgaG9tZVNydmMuZ2V0QXR0cmlidXRlcyhpZCkudGhlbihmdW5jdGlvbihyZXMpe1xyXG4gICAgICAkc2NvcGUuYXR0cmlidXRlcyA9IHJlcy5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxyXG4uY29udHJvbGxlcignY2Fyb3VzZWxDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcclxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMsICRpbnRlcnZhbCwgJHRpbWVvdXQpe1xyXG4gICAgJHNjb3BlLm15SW50ZXJ2YWwgPSAzMDAwO1xyXG4gICAgdmFyIGluZGV4ID0gLTE7XHJcbiAgICAkc2NvcGUuc2xpZGVzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdhbG51dC1kZXNrLWNvbGxlY3Rpb24tRzJfMS5qcGcnLFxyXG4gICAgICAgIHRpdGxlOiAnREVTSyBDT0xMRUNUSU9OJyxcclxuICAgICAgICBjb2xvcjogJ0lOIFdBTE5VVCBPUiBNQVBMRSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS13YXRjaC0wMi1BM18xLmpwZycsXHJcbiAgICAgICAgdGl0bGU6ICdXT09EIFdBVENIJyxcclxuICAgICAgICBjb2xvcjogJ01PREVMIDAyJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdhbGxldC1BNF8xLmpwZycsXHJcbiAgICAgICAgdGl0bGU6ICdFVkVSWURBWSBDQVJSWScsXHJcbiAgICAgICAgY29sb3I6ICdDT0xMRUNUSU9OJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdhbGxldC1jYXNlLUEyXzEuanBnJyxcclxuICAgICAgICB0aXRsZTogJ1dBTExFVCBDQVNFJyxcclxuICAgICAgICBjb2xvcjogJ0ZPUiBpUEhPTkUgNiAmIDcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd29vZC1pcGhvbmUtNi1jYXNlLUIyXzEuanBnJyxcclxuICAgICAgICB0aXRsZTogJ2lQSE9ORSAgIDcgQ0FTRVMnLFxyXG4gICAgICAgIGNvbG9yOiAnSU4gV0FMTlVUIE9SIE1BUExFJ1xyXG5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltYWdlOiAnL2ltZy9ob21lbWFycS1iaWZvbGQtd2FsbGV0LUUxXzEuanBnJyxcclxuICAgICAgICB0aXRsZTogJ0JJRk9MRCBXQUxMRVQnLFxyXG4gICAgICAgIGNvbG9yOiAnSU4gQkxBQ0sgT1IgVEFOJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdvb2Qtc3BlYWtlcnMtQTFfMi5qcGcnLFxyXG4gICAgICAgIHRpdGxlOiAnV09PRCBTUEVBS0VSUycsXHJcbiAgICAgICAgY29sb3I6ICdJTiBXQUxOVVQgT1IgTUFQTEUnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgICAkc2NvcGUucGhvdG9DbGFzcyA9IFtdXHJcbiAgICB2YXIgdGltZXIgPSAkaW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgJHNjb3BlLm5leHQoKVxyXG4gICAgfSwgNTAwMClcclxuICAgICRzY29wZS5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgICAgJGludGVydmFsLmNhbmNlbCh0aW1lcilcclxuICAgIH1cclxuICAgICRzY29wZS5uZXh0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgaW5kZXgrK1xyXG4gICAgICBpZihpbmRleCA+IDYpe1xyXG4gICAgICAgIGluZGV4ID0gMFxyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5uZXh0UGhvdG8gPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxyXG4gICAgICAkc2NvcGUubmV4dFRpdGxlID0gJHNjb3BlLnNsaWRlc1tpbmRleF0udGl0bGVcclxuICAgICAgJHNjb3BlLm5leHRDb2xvciA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmNvbG9yXHJcblxyXG4gICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVPdXQnKVxyXG4gICAgICAkdGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICRzY29wZS5waG90b0NsYXNzLnNwbGljZSgwLCAxLCAnYW5pbWF0ZWQgZmFkZUluJylcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxyXG4gICAgICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLnRpdGxlXHJcbiAgICAgICAgJHNjb3BlLmNvbG9yID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uY29sb3JcclxuICAgICAgfSwgNTAwKVxyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5wcmV2aW91cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGluZGV4LS1cclxuICAgICAgaWYoaW5kZXggPCAwKXtcclxuICAgICAgICBpbmRleCA9IDZcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUubmV4dFBob3RvID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uaW1hZ2VcclxuICAgICAgJHNjb3BlLm5leHRUaXRsZSA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLnRpdGxlXHJcbiAgICAgICRzY29wZS5uZXh0Q29sb3IgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5jb2xvclxyXG5cclxuICAgICAgJHNjb3BlLnBob3RvQ2xhc3Muc3BsaWNlKDAsIDEsICdhbmltYXRlZCBmYWRlT3V0JylcclxuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVJbicpXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uaW1hZ2VcclxuICAgICAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS50aXRsZVxyXG4gICAgICAgICRzY29wZS5jb2xvciA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmNvbG9yXHJcbiAgICAgIH0sIDUwMClcclxuICAgIH1cclxuICAgICRzY29wZS5uZXh0KClcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxyXG4uY29udHJvbGxlcignam91cm5hbEN0cmwnLCAoJHNjb3BlLCBob21lU3J2YywgJHN0YXRlUGFyYW1zKSA9PiB7XHJcblxyXG5cclxuICBob21lU3J2Yy5nZXRKb3VybmFsKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICRzY29wZS5qb3VybmFsID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKCdDVFJMJywgJHNjb3BlLmpvdXJuYWwpO1xyXG4gIH0pXHJcbiAgLy8gdXBvbiBob3ZlciwgdGhlIHNlbGVjdGVkIGluZGV4IGlzIHB1c2hpbmcgdGhlIGFuaW1hdGUuY3NzICBmYWRlIHRvIHRoZSBjb3ZlcmluZyBhcnJheVxyXG4kc2NvcGUuY292ZXJpbmcgPSBbXVxyXG4kc2NvcGUub25Ib3ZlciA9IGZ1bmN0aW9uKGkpe1xyXG4gICRzY29wZS5zZWxlY3RlZCA9IGlcclxuICAkc2NvcGUuY292ZXJpbmcucHVzaCgnY292ZXIgYW5pbWF0ZWQgZmFkZUluMicpXHJcbn1cclxuLy8gdXBvbiBtb3VzZSBsZWF2ZSwgdGhlIHNlbGVjdGVkIGluZGV4IHdlIGFyZSBvbiB3aWxsIHRha2UgYXdheSB0aGUgYW5pbWF0ZS5jc3NcclxuJHNjb3BlLm9uTGVhdmUgPSBmdW5jdGlvbihpKXtcclxuICAkc2NvcGUuc2VsZWN0ZWQgPSBpXHJcbiAgJHNjb3BlLmNvdmVyaW5nLnNwbGljZSgwKVxyXG59XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXHJcbi5jb250cm9sbGVyKCdzaG9wQ3RybCcsICgkc2NvcGUsIGhvbWVTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcclxuXHJcbiAgaG9tZVNydmMuZ2V0U2hvcCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAkc2NvcGUucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgY29uc29sZS5sb2coJ0NUUkwnLCAkc2NvcGUucHJvZHVjdHMpO1xyXG4gIH0pXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpLmRpcmVjdGl2ZSgnY3VzdG9tZm9vdGVyJywgKCkgPT4ge1xyXG4gIHJldHVybih7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL2Zvb3Rlci5odG1sJyxcclxuICAgIC8vIHRoZSBjb250cm9sbGVyIGlzIGZvciB0aGUgYXJyb3cgYnV0dG9uIHRvIHRha2UgdXMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKXtcclxuICAgICAgJHNjb3BlLnNjcm9sbFRvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgfVxyXG4gICAgfVxyXG59KVxyXG59KVxyXG4iLCJcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpLmRpcmVjdGl2ZSgnbmF2YmFyJywgKCkgPT4ge1xyXG4gIHJldHVybntcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZW1wbGF0ZXMvbmF2YmFyLmh0bWwnLFxyXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHN0YXRlLCAkcm9vdFNjb3BlKXtcclxuICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ3N0aWNreS1uYXYnKTtcclxuICAgICAgICB2YXIgc2Nyb2xsX3BvcyA9IDA7XHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzY3JvbGxfcG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgaWYoc2Nyb2xsX3BvcyA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgJCgnLm5hdicpLmFkZENsYXNzKCdzdGlja3ktbmF2Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgJCgnLm5hdicpLnJlbW92ZUNsYXNzKCdzdGlja3ktbmF2Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyB2YXIgaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICQoJy5uZXdzbGV0dGVyLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxuICAgICAgXHQvLyBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzQWN0aXZlKTtcclxuICAgICAgICAgICQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XHJcbiAgICAgIFx0Ly8gfSBlbHNlIHtcclxuICAgICAgXHRcdC8vICQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5hZGRDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XHJcbiAgICAgIFx0Ly8gfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKCcubmV3c2xldHRlci1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGlzQWN0aXZlID0gIWlzQWN0aXZlO1xyXG4gICAgICBcdC8vIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgICAgICQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5hZGRDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XHJcbiAgICAgIFx0Ly8gfSBlbHNlIHtcclxuICAgICAgXHRcdC8vICQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XHJcbiAgICAgIFx0Ly8gfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQoJy5uYXYtY2FydCcpLm9uKCdtb3VzZW92ZXInLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnN0aWNreS1jYXJ0JykuZmFkZUluKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgICQoJy5zdGlja3ktY2FydCcpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuc3RpY2t5LWNhcnQnKS5mYWRlT3V0KCk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfS8vZW5kIG9mIGNvbnRyb2xsZXJcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpLnNlcnZpY2UoJ2hvbWVTcnZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdGhpcy5nZXRTaG9wID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL3Nob3AnXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU1JWQycsIHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5nZXRBYm91dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvYWJvdXQnXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU1JWQycsIHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5nZXRKb3VybmFsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2pvdXJuYWwnXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnU1JWQycsIHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5nZXRBdHRyaWJ1dGVzID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvYXR0cmlidXRlcy8nICsgaWRcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxufSk7XHJcbiJdfQ==
