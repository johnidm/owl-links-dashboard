'use strict';

angular.module('owlLinksDashboardApp')
    .service('CollectLinksService', ['$http', 'API_URL', function ($http, API_URL) {
              
        this.getAllLinks = function () {
            return $http.get('{0}/{1}'.format(API_URL, 'collectlinks'));
        };
     
        this.delete = function (id) {
            return $http.delete('{0}/{1}/{2}'.format(API_URL, 'collectlink', id ));
        };
       
}]);