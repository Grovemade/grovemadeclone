angular.module('grovemade').service('homeSrvc', function($http) {

  this.getShop = () => {
    return $http({
      method: 'GET',
      url: '/shop'
    }).then((response) => {
      console.log('SRVC', response);
      return response;
    });
  };

  this.getAboutPage = () => {
    return $http({
      method: 'GET',
      url: '/about'
    }).then((response) => {
      console.log('SRVC', response);
      return response;
    });
  };

  this.getJournal = () => {
    return $http({
      method: 'GET',
      url: '/journal'
    }).then((response) => {
      console.log('SRVC', response);
      return response;
    });
  };

  this.getAttributes = (id) => {
    return $http({
      method: 'GET',
      url: '/attributes/' + id
    });
  };

  // this.getBio = (employee) => {
  //   return
  // }


});
