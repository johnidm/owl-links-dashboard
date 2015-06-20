'use strict';

angular.module('owlLinksDashboardApp')
    .service('NewslettersService', ['$http', 'API_URL', function ($http, API_URL) {
              
        this.getAll = function () {
            var url = '{0}/{1}'.format(API_URL, 'newsletters');
            return $http.get(url);
        };
     
        this.delete = function (id) {
            var url = '{0}/{1}/{2}'.format(API_URL, 'newsletter', id);
            return $http.delete(url);
        };
       
}]);