angular.module('grovemade').service('homeSrvc', function($http) {

  this.getJournal = () => {
    return $http({
      method: 'GET',
      url: '/journal'
    }).then((response) => {
      console.log('SRVC', response);
      return response;
    })
  }

});
