'use strict';

angular.module('owlLinksDashboardApp')
    .service('CollectLinkServ', ['$http', 'API_URL', function ($http, API_URL) {
              
        this.getAllLinks = function () {
            return $http.get(API_URL + 'collectlinks');
        };
     
        this.delete = function (id) {
            return $http.delete(API_URL + 'collectlink/' + id );
        };
       
}]);