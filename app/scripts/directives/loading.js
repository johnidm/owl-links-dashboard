'use strict';

angular.module('owlLinksDashboardApp')
    .directive('loading', function( $http) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="loading">LOADING...</div>',

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
