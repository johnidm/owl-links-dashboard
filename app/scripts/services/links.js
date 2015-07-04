'use strict';

angular.module('owlLinksDashboardApp')
    .service('LinksService', ['$http', 'API_URL', function ($http, API_URL) {

        this.getAllTags = function () {
            return $http.get('{0}/{1}/{2}'.format(API_URL, 'links', 'tags'));
        };
              
        this.getAll = function () {
            return $http.get('{0}/{1}'.format(API_URL, 'links'));
        };

        this.getById = function(id) {
            return $http.get('{0}/{1}/{2}'.format(API_URL, 'links', id));
        } 
     
        this.delete = function (id) {
            var url = '{0}/{1}/{2}'.format(API_URL, 'link', id )
            return $http.delete(url);
        };

        this.update = function(link) {  
            var url = '{0}/{1}/{2}'.format(API_URL, 'link', link.id )
            return $http.put(url, link);
        }

        this.insert = function(link) {            
            var url = '{0}/{1}'.format(API_URL, 'link');
            return $http.post(url, link);
        }
       
}]);