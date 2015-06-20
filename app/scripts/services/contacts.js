'use strict';

angular.module('owlLinksDashboardApp')
    
    .service('ContactsService', ['$http', 'API_URL', function($http, API_URL) {

        this.getAll = function() {
            var url = '{0}/{1}'.format(API_URL, 'contacts');
            return $http.get(url);
        };

        this.getById = function(id) {
            var url = '{0}/{1}/{2}'.format(API_URL, 'contact', id);
            return $http.get(url);
        };

        this.delete = function(id) {
            var url = '{0}/{1}/{2}'.format(API_URL, 'contact', id);
            return $http.delete(url);
        };
    }]);
