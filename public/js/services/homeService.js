angular.module('grovemade').service('homeSrvc', function($http) {

  this.getShop = () => {
    return $http({
      method: 'GET',
      url: '/shop'
    }).then((response) => {
      // console.log('SRVC', response);
      return response;
    });
  };

  this.getAboutPage = () => {
    return $http({
      method: 'GET',
      url: '/about'
    }).then((response) => {
      // console.log('SRVC', response);
      return response;
    });
  };

  this.getJournal = () => {
    return $http({
      method: 'GET',
      url: '/journal'
    }).then((response) => {
      // console.log('SRVC', response);
      return response;
    });
  };

  this.getAttributes = (id) => {
    return $http({
      method: 'GET',
      url: '/attributes/' + id
    });
  };

  this.getProduct = (id) => {
    return $http({
      method: 'GET',
      url: '/product/' + id
    }).then((response) => {
      // console.log('SRVC product', response);
      return response;
    });
  };

  this.getCarousel = (id) => {
    return $http({
      method: 'GET',
      url: '/carousel/' + id
    }).then((response) => {
      // console.log('SRVC carousel', response);
      return response;
    });
  };

  this.getSizes = (id) => {
    return $http({
      method: 'GET',
      url: '/sizes/' + id
    }).then((response) => {
      // console.log('SRVC sizes', response);
      return response;
    });
  };

   this.getImages = (size) => {
     let id = size.id;
    return $http({
      method: 'GET',
      url: '/images/' + id
    }).then((response) => {
      // console.log('SRVC images', response);
      return response;
    });
  };

  this.addToCart = (productId, productName, productImage, size, productQuantity) => {
    let item = {
      productId: productId,
      productName: productName,
      productImage: productImage,
      size: size,
      productQuantity: productQuantity
    }
    return $http({
      method: 'POST',
      url: '/cart',
      data: item
    }).then(() => {
      console.log('SRVC item added')
    });
  };

  this.getCart = () => {
    return $http({
      method: 'GET',
      url: '/cart'
    }).then((response) => {
      // console.log('SRVC CART', response)
      return response;
    });
  };

  this.updateQuantity = (productId, productQuantity) => {
    let product = {
      productId: productId,
      productQuantity: productQuantity
    }
    console.log('SRVC product', product);
    return $http({
      method: 'PUT',
      url: '/cart/' + productId,
      data: product
    }).then((response) => {
      console.log('SRVC UPDATING', response);
    })
  };



  this.addToCart = (productId, productName, productImage, size, quantity) => {
    let item = {
      productId: productId,
      productName: productName,
      productImage: productImage,
      size: size,
      quantity: quantity
    }
    return $http({
      method: 'POST',
      url: '/cart',
      data: item
    }).then(() => {
      console.log('SRVC item added')
    });
  };

  this.submitEmail = (email) => {
    let subscription = {
      email: email
    }
    return $http({
      method: 'POST',
      url: '/newsletter',
      data: subscription
    }).then(() => {
      console.log('SRVC sending email')
    });
  };
  
  this.removeFromCart = (item) => {
    let id = item.productId;
    return $http({
      method: 'DELETE',
      url: '/cart/' + id
    }).then((response) => {
      console.log('SRVC REMOVE FROM CART', response);
      return response;
    });
  };


});//end of service
