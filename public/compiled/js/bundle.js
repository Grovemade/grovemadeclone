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
  }).state('product', {
    url: '/product/:id',
    templateUrl: '/templates/product.html',
    controller: 'productCtrl'
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

angular.module('grovemade').controller('productCtrl', function ($scope, homeSrvc, $stateParams) {

  homeSrvc.getProduct($stateParams.id).then(function (response) {
    $scope.item = response.data;
    console.log('DETAILs', $scope.item);
  });

  homeSrvc.getCarousel($stateParams.id).then(function (response) {
    console.log('PRODUCT ID', $stateParams.id);
    $scope.carousels = response.data;
    console.log('CAROUSEL', $scope.carousels);
  });

  homeSrvc.getSizes($stateParams.id).then(function (response) {
    $scope.sizes = response.data;
    console.log('SIZES', $scope.sizes);
  });

  $scope.getImages = function (size) {
    homeSrvc.getImages(size).then(function (response) {
      console.log('SIZE ID', size);
      $scope.images = response.data;
      console.log('IMAGES', $scope.images);
    }).catch(function (err) {
      console.log(err);
    });
  };
}); //end of controller
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

  this.getProduct = function (id) {
    return $http({
      method: 'GET',
      url: '/product/' + id
    }).then(function (response) {
      console.log('SRVC product', response);
      return response;
    });
  };

  this.getCarousel = function (id) {
    return $http({
      method: 'GET',
      url: '/carousel/' + id
    }).then(function (response) {
      console.log('SRVC carousel', response);
      return response;
    });
  };

  this.getSizes = function (id) {
    return $http({
      method: 'GET',
      url: '/sizes/' + id
    }).then(function (response) {
      console.log('SRVC sizes', response);
      return response;
    });
  };

  this.getImages = function (size) {
    var id = size.id;
    return $http({
      method: 'GET',
      url: '/images/' + id
    }).then(function (response) {
      console.log('SRVC images', response);
      return response;
    });
  };
});
