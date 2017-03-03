angular.module('grovemade')
  .controller('productCtrl', ($scope, homeSrvc, $stateParams, $rootScope) => {

    $scope.base = true;
    $scope.size = false;


    homeSrvc.getProduct($stateParams.id).then((response) => {
      $scope.item = response.data;
      console.log('DETAILs', $scope.item);
      $scope.currentImg = $scope.item[0].image1 || $scope.item[0].image2;
    });

    homeSrvc.getCarousel($stateParams.id).then((response) => {
      console.log('PRODUCT ID', $stateParams.id);
      $scope.carousels = response.data;
      console.log('CAROUSEL', $scope.carousels);
      $scope.currentImg3 = $scope.carousels[0].url;
      $scope.imageIndex2 = 0;
    });

    homeSrvc.getSizes($stateParams.id).then((response) => {
      $scope.sizes = response.data;
      console.log('SIZES', $scope.sizes);
    });

    $scope.getImages = (size) => {
      $scope.base = false
      $scope.size = true
      homeSrvc.getImages(size).then((response) => {
        console.log('SIZE ID', size);
        let imageObj = response.data;
        $scope.images = []
        for (var i = 0; i < imageObj.length; i++) {
          $scope.images.push(imageObj[i].url)
        }
        $scope.currentImg2 = $scope.images[0];
        $scope.imageIndex = 0;
        console.log('IMAGES', $scope.images);
      }).catch((err) => {
        console.log(err);
      })
    }

    $scope.next = function () {
      if (!$scope.currentImg2) {
        if ($scope.currentImg == $scope.item[0].image1) {
          $scope.currentImg = $scope.item[0].image2
        }
        else {
          $scope.currentImg = $scope.item[0].image1
        };
      } else {
        if ($scope.images[$scope.imageIndex] === $scope.images[$scope.images.length - 1]) {
          $scope.currentImg2 = $scope.images[0];
          $scope.imageIndex = 0;
        } else {
          ++$scope.imageIndex;
          $scope.currentImg2 = $scope.images[$scope.imageIndex];
        }
      }
    }

    $scope.next2 = function () {
      if ($scope.imageIndex2 === $scope.carousels.length - 1) {
        $scope.currentImg3 = $scope.carousels[0].url;
        $scope.imageIndex2 = 0;
      } else {
        ++$scope.imageIndex2;
        $scope.currentImg3 = $scope.carousels[$scope.imageIndex2].url;
      }
    }

    $scope.previous = function () {
      if (!$scope.currentImg2) {
        if ($scope.currentImg == $scope.item[0].image1) {
          $scope.currentImg = $scope.item[0].image2
        }
        else {
          $scope.currentImg = $scope.item[0].image1
        };
      } else {
        if ($scope.imageIndex === $scope.images[0]) {
          $scope.currentImg2 = $scope.images[$scope.images.length - 1];
          $scope.imageIndex = $scope.images.length - 1;
        } else {
          --$scope.imageIndex;
          $scope.currentImg2 = $scope.images[$scope.imageIndex];
        }
      }
    }

    $scope.previous2 = function () {
      if ($scope.imageIndex2 === 0) {
        $scope.currentImg3 = $scope.carousels[$scope.carousels.length - 1].url;
        $scope.imageIndex2 = $scope.carousels.length - 1;
      } else {
        --$scope.imageIndex2;
        $scope.currentImg3 = $scope.carousels[$scope.imageIndex2].url;
      }
    }

    $scope.addToCart = (size, productQuantity) => {
      console.log('SIZE', size);
      $rootScope.cartTotal += Number(productQuantity);
      let productId = $scope.item[0].product_id;
      let productName = $scope.item[0].name;
      if (!$scope.item[0].image1) {
        var productImage = $scope.item[0].image2;
      } else {
        var productImage = $scope.item[0].image1;
      }
      homeSrvc.addToCart(productId, productName, productImage, size, productQuantity);
    };

  }); //end of controller
