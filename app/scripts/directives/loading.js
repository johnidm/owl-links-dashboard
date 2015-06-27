'use strict';

angular.module('owlLinksDashboardApp')
    .directive('loading', function( $http) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="loading"><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" />LOADING...</div>',

            link: function(scope, elm, attrs) {

                scope.isLoading = function() {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function(v) {

                    if (v) {
                        elm.show();
                    } else {
                        elm.hide();
                    }
                    
                });
            }
        }
    });
