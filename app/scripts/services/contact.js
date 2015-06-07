'use strict';

angular.module('owlLinksDashboardApp')
    .service('ContactsServ', ['$http', 'API_URL', function ($http, API_URL) {
              
        this.getAllContacts = function () {
            return $http.get(API_URL + 'contacts');
        };
     
        this.getById = function (id) {
            return $http.get(API_URL + 'contact/' + id );
        };
       
}]);