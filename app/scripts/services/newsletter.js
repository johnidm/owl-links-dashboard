'use strict';

angular.module('owlLinksDashboardApp')
    .service('NewsletterServ', ['$http', 'API_URL', function ($http, API_URL) {
              
        this.getAllNewsletters = function () {
            return $http.get(API_URL + 'newsletters');
        };
     
        this.delete = function (id) {
            return $http.delete(API_URL + 'newsletter/' + id );
        };
       
}]);