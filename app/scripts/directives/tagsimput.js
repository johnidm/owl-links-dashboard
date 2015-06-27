'use strict';

angular.module('owlLinksDashboardApp')
    .directive('tagsimput', function() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
            }
        };
    });
