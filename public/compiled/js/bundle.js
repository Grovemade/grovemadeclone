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
  });

  $(document).on("mouseover", "#unique", function () {
    $(this).addClass('animated fadeOut');
  });
  $(document).on("mouseleave", "#unique", function () {
    $(this).removeClass('animated fadeOut');
    $(this).addClass('animated fadeIn');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzL2Fib3V0Q3RybC5qcyIsImNvbnRyb2xsZXJzL2Nhcm91c2VsQ3RybC5qcyIsImNvbnRyb2xsZXJzL2hvbWVDdHJsLmpzIiwiY29udHJvbGxlcnMvam91cm5hbEN0cmwuanMiLCJjb250cm9sbGVycy9zaG9wQ3RybC5qcyIsImRpcmVjdGl2ZXMvZm9vdGVyLmpzIiwiZGlyZWN0aXZlcy9ob21lRGlyZWN0aXZlLmpzIiwiZGlyZWN0aXZlcy9uYXZiYXIuanMiLCJzZXJ2aWNlcy9ob21lU2VydmljZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsIiRzY29wZSIsImhvbWVTcnZjIiwiJHN0YXRlUGFyYW1zIiwiZ2V0QWJvdXRQYWdlIiwidGhlbiIsInJlc3BvbnNlIiwiZW1wbG95ZWVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG93RW1wbG95ZWUiLCJpZCIsImdldEF0dHJpYnV0ZXMiLCJyZXMiLCJhdHRyaWJ1dGVzIiwiJGludGVydmFsIiwiJHRpbWVvdXQiLCJteUludGVydmFsIiwiaW5kZXgiLCJzbGlkZXMiLCJpbWFnZSIsInRpdGxlIiwiY29sb3IiLCJwaG90b0NsYXNzIiwidGltZXIiLCJuZXh0Iiwic3RvcCIsImNhbmNlbCIsIm5leHRQaG90byIsIm5leHRUaXRsZSIsIm5leHRDb2xvciIsInNwbGljZSIsInNlbGVjdGVkIiwicHJldmlvdXMiLCJnZXRKb3VybmFsIiwiam91cm5hbCIsImNvdmVyaW5nIiwib25Ib3ZlciIsImkiLCJwdXNoIiwib25MZWF2ZSIsImdldFNob3AiLCJwcm9kdWN0cyIsIiQiLCJkb2N1bWVudCIsIm9uIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRpcmVjdGl2ZSIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwiJHN0YXRlIiwiJHJvb3RTY29wZSIsInJlYWR5Iiwic2Nyb2xsX3BvcyIsInNjcm9sbCIsImZhZGVJbiIsIm1vdXNlbGVhdmUiLCJmYWRlT3V0Iiwic2VydmljZSIsIiRodHRwIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsV0FBZixFQUE0QixDQUFDLFdBQUQsQ0FBNUIsRUFDQ0MsTUFERCxDQUNRLFVBQVNDLGNBQVQsRUFBeUJDLGtCQUF6QixFQUE0Qzs7QUFFbERBLHFCQUFtQkMsU0FBbkIsQ0FBNkIsR0FBN0I7O0FBRUFGLGlCQUNDRyxLQURELENBQ08sTUFEUCxFQUNlO0FBQ2JDLFNBQUksR0FEUztBQUViQyxpQkFBWSx1QkFGQztBQUdiQyxnQkFBVztBQUhFLEdBRGYsRUFPQ0gsS0FQRCxDQU9PLE1BUFAsRUFPZTtBQUNiQyxTQUFJLE9BRFM7QUFFYkMsaUJBQVksdUJBRkM7QUFHYkMsZ0JBQVc7QUFIRSxHQVBmLEVBYUNILEtBYkQsQ0FhTyxPQWJQLEVBYWdCO0FBQ2RDLFNBQUksUUFEVTtBQUVkQyxpQkFBWSx3QkFGRTtBQUdkQyxnQkFBVztBQUhHLEdBYmhCLEVBbUJDSCxLQW5CRCxDQW1CTyxTQW5CUCxFQW1Ca0I7QUFDaEJDLFNBQUksVUFEWTtBQUVoQkMsaUJBQVksMEJBRkk7QUFHaEJDLGdCQUFXO0FBSEssR0FuQmxCLEVBeUJDSCxLQXpCRCxDQXlCTyxHQXpCUCxFQXlCWTtBQUNWQyxTQUFJLDBCQURNO0FBRVZDLGlCQUFZLGtDQUZGO0FBR1ZDLGdCQUFXO0FBSEQsR0F6QlosRUErQkNILEtBL0JELENBK0JPLEdBL0JQLEVBK0JZO0FBQ1ZDLFNBQUkseUJBRE07QUFFVkMsaUJBQVksaUNBRkY7QUFHVkMsZ0JBQVc7QUFIRCxHQS9CWixFQXFDQ0gsS0FyQ0QsQ0FxQ08sR0FyQ1AsRUFxQ1k7QUFDVkMsU0FBSSxzQ0FETTtBQUVWQyxpQkFBWSw4Q0FGRjtBQUdWQyxnQkFBVztBQUhELEdBckNaO0FBNkNE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WixFQUFvQkosUUFBcEI7QUFDQSxhQUFPQSxRQUFQO0FBQ0QsS0FOTSxDQUFQO0FBT0QsR0FSRDs7QUFVQSxPQUFLNkIsVUFBTCxHQUFrQixZQUFNO0FBQ3RCLFdBQU8yQixNQUFNO0FBQ1hDLGNBQVEsS0FERztBQUVYakUsV0FBSztBQUZNLEtBQU4sRUFHSk8sSUFISSxDQUdDLFVBQUNDLFFBQUQsRUFBYztBQUNwQkcsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JKLFFBQXBCO0FBQ0EsYUFBT0EsUUFBUDtBQUNELEtBTk0sQ0FBUDtBQU9ELEdBUkQ7O0FBVUEsT0FBS08sYUFBTCxHQUFxQixVQUFDRCxFQUFELEVBQVE7QUFDM0IsV0FBT2tELE1BQU07QUFDWEMsY0FBUSxLQURHO0FBRVhqRSxXQUFLLGlCQUFpQmM7QUFGWCxLQUFOLENBQVA7QUFJRCxHQUxEO0FBUUQsQ0F4Q0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScsIFsndWkucm91dGVyJ10pXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxuXG4gICRzdGF0ZVByb3ZpZGVyXG4gIC5zdGF0ZSgnaG9tZScsIHtcbiAgICB1cmw6Jy8nLFxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6J2hvbWVDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnc2hvcCcsIHtcbiAgICB1cmw6Jy9zaG9wJyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvc2hvcC5odG1sJyxcbiAgICBjb250cm9sbGVyOidzaG9wQ3RybCdcbiAgfSlcblxuICAuc3RhdGUoJ2Fib3V0Jywge1xuICAgIHVybDonL2Fib3V0JyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvYWJvdXQuaHRtbCcsXG4gICAgY29udHJvbGxlcjonYWJvdXRDdHJsJ1xuICB9KVxuXG4gIC5zdGF0ZSgnam91cm5hbCcsIHtcbiAgICB1cmw6Jy9qb3VybmFsJyxcbiAgICB0ZW1wbGF0ZVVybDonLi90ZW1wbGF0ZXMvam91cm5hbC5odG1sJyxcbiAgICBjb250cm9sbGVyOidqb3VybmFsQ3RybCdcbiAgfSlcblxuICAuc3RhdGUoJzEnLCB7XG4gICAgdXJsOicvam91cm5hbC9kZXNrLWVyZ29ub21pY3MnLFxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9kZXNrLWVyZ29ub21pY3MuaHRtbCcsXG4gICAgY29udHJvbGxlcjonam91cm5hbEN0cmwnXG4gIH0pXG5cbiAgLnN0YXRlKCcyJywge1xuICAgIHVybDonL2pvdXJuYWwvbG92ZS15b3VyLXdvcmsnLFxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9sb3ZlLXlvdXItd29yay5odG1sJyxcbiAgICBjb250cm9sbGVyOidqb3VybmFsQ3RybCdcbiAgfSlcblxuICAuc3RhdGUoJzMnLCB7XG4gICAgdXJsOicvam91cm5hbC9kZXNpZ25pbmctdGhlLXdvb2Qtd2F0Y2gtMDInLFxuICAgIHRlbXBsYXRlVXJsOicuL3RlbXBsYXRlcy9kZXNpZ25pbmctdGhlLXdvb2Qtd2F0Y2gtMDIuaHRtbCcsXG4gICAgY29udHJvbGxlcjonam91cm5hbEN0cmwnXG4gIH0pXG5cblxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpXG4uY29udHJvbGxlcignYWJvdXRDdHJsJywgKCRzY29wZSwgaG9tZVNydmMsICRzdGF0ZVBhcmFtcykgPT4ge1xuXG4gIGhvbWVTcnZjLmdldEFib3V0UGFnZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgJHNjb3BlLmVtcGxveWVlcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgY29uc29sZS5sb2coJ0NUUkwnLCAkc2NvcGUuZW1wbG95ZWVzKTtcblxuICB9KVxuXG5cbiAgJHNjb3BlLnNob3dFbXBsb3llZT1mdW5jdGlvbihpZCl7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGhvbWVTcnZjLmdldEF0dHJpYnV0ZXMoaWQpLnRoZW4oZnVuY3Rpb24ocmVzKXtcbiAgICAgICRzY29wZS5hdHRyaWJ1dGVzID0gcmVzLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgfSlcblxuXG4gIH1cblxuXG5cblxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcbi5jb250cm9sbGVyKCdjYXJvdXNlbEN0cmwnLCBmdW5jdGlvbigkc2NvcGUpe1xuXG5cblxuXG4gICAgfSlcbiIsImFuZ3VsYXIubW9kdWxlKCdncm92ZW1hZGUnKVxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMsICRpbnRlcnZhbCwgJHRpbWVvdXQpe1xuICAgICRzY29wZS5teUludGVydmFsID0gMzAwMDtcbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAkc2NvcGUuc2xpZGVzID0gW1xuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd2FsbnV0LWRlc2stY29sbGVjdGlvbi1HMl8xLmpwZycsXG4gICAgICAgIHRpdGxlOiAnREVTSyBDT0xMRUNUSU9OJyxcbiAgICAgICAgY29sb3I6ICdJTiBXQUxOVVQgT1IgTUFQTEUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd2F0Y2gtMDItQTNfMS5qcGcnLFxuICAgICAgICB0aXRsZTogJ1dPT0QgV0FUQ0gnLFxuICAgICAgICBjb2xvcjogJ01PREVMIDAyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdhbGxldC1BNF8xLmpwZycsXG4gICAgICAgIHRpdGxlOiAnRVZFUllEQVkgQ0FSUlknLFxuICAgICAgICBjb2xvcjogJ0NPTExFQ1RJT04nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtd2FsbGV0LWNhc2UtQTJfMS5qcGcnLFxuICAgICAgICB0aXRsZTogJ1dBTExFVCBDQVNFJyxcbiAgICAgICAgY29sb3I6ICdGT1IgaVBIT05FIDYgJiA3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdvb2QtaXBob25lLTYtY2FzZS1CMl8xLmpwZycsXG4gICAgICAgIHRpdGxlOiAnaVBIT05FICAgNyBDQVNFUycsXG4gICAgICAgIGNvbG9yOiAnSU4gV0FMTlVUIE9SIE1BUExFJ1xuXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogJy9pbWcvaG9tZW1hcnEtYmlmb2xkLXdhbGxldC1FMV8xLmpwZycsXG4gICAgICAgIHRpdGxlOiAnQklGT0xEIFdBTExFVCcsXG4gICAgICAgIGNvbG9yOiAnSU4gQkxBQ0sgT1IgVEFOJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6ICcvaW1nL2hvbWVtYXJxLXdvb2Qtc3BlYWtlcnMtQTFfMi5qcGcnLFxuICAgICAgICB0aXRsZTogJ1dPT0QgU1BFQUtFUlMnLFxuICAgICAgICBjb2xvcjogJ0lOIFdBTE5VVCBPUiBNQVBMRSdcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5waG90b0NsYXNzID0gW11cbiAgICB2YXIgdGltZXIgPSAkaW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICRzY29wZS5uZXh0KClcbiAgICB9LCA1MDAwKVxuICAgICRzY29wZS5zdG9wID0gZnVuY3Rpb24oKXtcbiAgICAgICRpbnRlcnZhbC5jYW5jZWwodGltZXIpXG4gICAgfVxuICAgICRzY29wZS5uZXh0ID0gZnVuY3Rpb24oKXtcbiAgICAgIGluZGV4KytcbiAgICAgIGlmKGluZGV4ID4gNil7XG4gICAgICAgIGluZGV4ID0gMFxuICAgICAgfVxuICAgICAgJHNjb3BlLm5leHRQaG90byA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLmltYWdlXG4gICAgICAkc2NvcGUubmV4dFRpdGxlID0gJHNjb3BlLnNsaWRlc1tpbmRleF0udGl0bGVcbiAgICAgICRzY29wZS5uZXh0Q29sb3IgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5jb2xvclxuXG4gICAgICAkc2NvcGUucGhvdG9DbGFzcy5zcGxpY2UoMCwgMSwgJ2FuaW1hdGVkIGZhZGVPdXQnKVxuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgJHNjb3BlLnBob3RvQ2xhc3Muc3BsaWNlKDAsIDEsICdhbmltYXRlZCBmYWRlSW4nKVxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWQgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxuICAgICAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS50aXRsZVxuICAgICAgICAkc2NvcGUuY29sb3IgPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5jb2xvclxuICAgICAgfSwgNTAwKVxuICAgIH1cblxuICAgICRzY29wZS5wcmV2aW91cyA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbmRleC0tXG4gICAgICBpZihpbmRleCA8IDApe1xuICAgICAgICBpbmRleCA9IDZcbiAgICAgIH1cbiAgICAgICRzY29wZS5uZXh0UGhvdG8gPSAkc2NvcGUuc2xpZGVzW2luZGV4XS5pbWFnZVxuICAgICAgJHNjb3BlLm5leHRUaXRsZSA9ICRzY29wZS5zbGlkZXNbaW5kZXhdLnRpdGxlXG4gICAgICAkc2NvcGUubmV4dENvbG9yID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uY29sb3JcblxuICAgICAgJHNjb3BlLnBob3RvQ2xhc3Muc3BsaWNlKDAsIDEsICdhbmltYXRlZCBmYWRlT3V0JylcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICRzY29wZS5waG90b0NsYXNzLnNwbGljZSgwLCAxLCAnYW5pbWF0ZWQgZmFkZUluJylcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uaW1hZ2VcbiAgICAgICAgJHNjb3BlLnRpdGxlID0gJHNjb3BlLnNsaWRlc1tpbmRleF0udGl0bGVcbiAgICAgICAgJHNjb3BlLmNvbG9yID0gJHNjb3BlLnNsaWRlc1tpbmRleF0uY29sb3JcbiAgICAgIH0sIDUwMClcbiAgICB9XG4gICAgJHNjb3BlLm5leHQoKVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcbi5jb250cm9sbGVyKCdqb3VybmFsQ3RybCcsICgkc2NvcGUsIGhvbWVTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuXG4gIGhvbWVTcnZjLmdldEpvdXJuYWwoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICRzY29wZS5qb3VybmFsID0gcmVzcG9uc2UuZGF0YTtcbiAgICBjb25zb2xlLmxvZygnQ1RSTCcsICRzY29wZS5qb3VybmFsKTtcbiAgfSlcbiAgLy8gdXBvbiBob3ZlciwgdGhlIHNlbGVjdGVkIGluZGV4IGlzIHB1c2hpbmcgdGhlIGFuaW1hdGUuY3NzICBmYWRlIHRvIHRoZSBjb3ZlcmluZyBhcnJheVxuJHNjb3BlLmNvdmVyaW5nID0gW107XG4kc2NvcGUub25Ib3ZlciA9IGZ1bmN0aW9uKGkpe1xuICAkc2NvcGUuc2VsZWN0ZWQgPSBpXG4gICRzY29wZS5jb3ZlcmluZy5wdXNoKCdjb3ZlciBhbmltYXRlZCBmYWRlSW4yJylcbn1cbi8vIHVwb24gbW91c2UgbGVhdmUsIHRoZSBzZWxlY3RlZCBpbmRleCB3ZSBhcmUgb24gd2lsbCB0YWtlIGF3YXkgdGhlIGFuaW1hdGUuY3NzXG4kc2NvcGUub25MZWF2ZSA9IGZ1bmN0aW9uKGkpe1xuICAkc2NvcGUuc2VsZWN0ZWQgPSBpXG4gICRzY29wZS5jb3ZlcmluZy5zcGxpY2UoMClcbn1cblxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJylcbi5jb250cm9sbGVyKCdzaG9wQ3RybCcsICgkc2NvcGUsIGhvbWVTcnZjLCAkc3RhdGVQYXJhbXMpID0+IHtcblxuICBob21lU3J2Yy5nZXRTaG9wKCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAkc2NvcGUucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhO1xuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbihcIm1vdXNlb3ZlclwiLCBcIiN1bmlxdWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dCcpXG4gIH0pO1xuICAkKGRvY3VtZW50KS5vbihcIm1vdXNlbGVhdmVcIiwgXCIjdW5pcXVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGZhZGVPdXQnKVxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJbicpXG4gIH0pO1xuXG4gIC8vICQoZG9jdW1lbnQpLm9uKFwibW91c2VvdmVyXCIsIFwiLnByb2R1Y3QtbGlua1wiLCBmdW5jdGlvbigpIHtcbiAgLy8gICAkKCcjaW5mbycpLmFkZENsYXNzKCdyZXZlYWwgYW5pbWF0ZWQgZmFkZUluJylcbiAgLy8gICAkKCcjaW5mbycpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAvLyB9KTtcbiAgLy8gJChkb2N1bWVudCkub24oXCJtb3VzZWxlYXZlXCIsIFwiLnByb2R1Y3QtbGlua1wiLCBmdW5jdGlvbigpIHtcbiAgLy8gICAkKCcjaW5mbycpLnJlbW92ZUNsYXNzKCdyZXZlYWwgYW5pbWF0ZWQgZmFkZUluICcpXG4gIC8vICAgJCgnI2luZm8nKS5hZGRDbGFzcygnaGlkZGVuIGFuaW1hdGVkIGZhZGVPdXQnKVxuICAvLyB9KTtcblxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJykuZGlyZWN0aXZlKCdjdXN0b21mb290ZXInLCAoKSA9PiB7XG4gIHJldHVybih7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3RlbXBsYXRlcy9mb290ZXIuaHRtbCcsXG4gICAgLy8gdGhlIGNvbnRyb2xsZXIgaXMgZm9yIHRoZSBhcnJvdyBidXR0b24gdG8gdGFrZSB1cyB0byB0aGUgdG9wIG9mIHRoZSBwYWdlXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlKXtcbiAgICAgICRzY29wZS5zY3JvbGxUb3AgPSBmdW5jdGlvbigpe1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgfVxuICAgIH1cbn0pXG59KVxuIiwiXG4iLCJhbmd1bGFyLm1vZHVsZSgnZ3JvdmVtYWRlJykuZGlyZWN0aXZlKCduYXZiYXInLCAoKSA9PiB7XG4gIHJldHVybntcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL25hdmJhci5odG1sJyxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc3RhdGUsICRyb290U2NvcGUpe1xuICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm5hdicpLnJlbW92ZUNsYXNzKCdzdGlja3ktbmF2Jyk7XG4gICAgICAgIHZhciBzY3JvbGxfcG9zID0gMDtcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2Nyb2xsX3BvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICBpZihzY3JvbGxfcG9zID4gMjApIHtcbiAgICAgICAgICAgICAgJCgnLm5hdicpLmFkZENsYXNzKCdzdGlja3ktbmF2Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ3N0aWNreS1uYXYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gdmFyIGlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICQoJy5uZXdzbGV0dGVyLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gaXNBY3RpdmUgPSAhaXNBY3RpdmU7XG4gICAgICBcdC8vIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzQWN0aXZlKTtcbiAgICAgICAgICAkKCcubmV3c2xldHRlci13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGUtbmV3c2xldHRlcicpO1xuICAgICAgXHQvLyB9IGVsc2Uge1xuICAgICAgXHRcdC8vICQoJy5uZXdzbGV0dGVyLXdyYXBwZXInKS5hZGRDbGFzcygnaGlkZS1uZXdzbGV0dGVyJyk7XG4gICAgICBcdC8vIH1cblxuICAgICAgfSk7XG5cbiAgICAgICQoJy5uZXdzbGV0dGVyLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGlzQWN0aXZlID0gIWlzQWN0aXZlO1xuICAgICAgXHQvLyBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgJCgnLm5ld3NsZXR0ZXItd3JhcHBlcicpLmFkZENsYXNzKCdoaWRlLW5ld3NsZXR0ZXInKTtcbiAgICAgIFx0Ly8gfSBlbHNlIHtcbiAgICAgIFx0XHQvLyAkKCcubmV3c2xldHRlci13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGUtbmV3c2xldHRlcicpO1xuICAgICAgXHQvLyB9XG4gICAgICB9KTtcblxuICAgICAgJCgnLm5hdi1jYXJ0Jykub24oJ21vdXNlb3ZlcicsZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLnN0aWNreS1jYXJ0JykuZmFkZUluKCk7XG4gICAgICB9KVxuICAgICAgJCgnLnN0aWNreS1jYXJ0JykubW91c2VsZWF2ZShmdW5jdGlvbigpe1xuICAgICAgICAkKCcuc3RpY2t5LWNhcnQnKS5mYWRlT3V0KCk7XG4gICAgICB9KVxuXG4gICAgfS8vZW5kIG9mIGNvbnRyb2xsZXJcbiAgfTtcbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2dyb3ZlbWFkZScpLnNlcnZpY2UoJ2hvbWVTcnZjJywgZnVuY3Rpb24oJGh0dHApIHtcblxuICB0aGlzLmdldFNob3AgPSAoKSA9PiB7XG4gICAgcmV0dXJuICRodHRwKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvc2hvcCdcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1NSVkMnLCByZXNwb25zZSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5nZXRBYm91dFBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuICRodHRwKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvYWJvdXQnXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdTUlZDJywgcmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuZ2V0Sm91cm5hbCA9ICgpID0+IHtcbiAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9qb3VybmFsJ1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU1JWQycsIHJlc3BvbnNlKTtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEF0dHJpYnV0ZXMgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9hdHRyaWJ1dGVzLycgKyBpZFxuICAgIH0pO1xuICB9O1xuXG5cbn0pO1xuIl19
