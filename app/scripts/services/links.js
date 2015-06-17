'use strict';

angular.module('owlLinksDashboardApp')
    .service('LinksService', ['$http', 'API_URL', function ($http, API_URL) {
              
        this.getAllLinks = function () {
            return $http.get('{0}/{1}'.format(API_URL, 'links'));
        };

        this.getById = function(id) {
            return $http.get('{0}/{1}/{2}'.format(API_URL, 'links', id));
        } 
     
        this.delete = function (id) {
            return $http.delete('{0}/{1}/{2}'.format(API_URL, 'link', id ));
        };

        this.update = function(link) {
            
        }
       
}]);