'use strict';

angular.module('owlLinksDashboardApp')
    .directive('loading', function( $http, ngProgress) {
        return {
            restrict: 'E',
            replace: true,

            link: function(scope, elm, attrs) {

                scope.isLoading = function() {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function(v) {

                    if (v) {
                        ngProgress.color('#C62828');
                        ngProgress.height('3px');
                        ngProgress.start();
                    } else {
                        ngProgress.complete();
                    }
                    
                });
            }
        }
    });
