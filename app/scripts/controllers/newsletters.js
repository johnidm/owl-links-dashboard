'use strict';

angular.module('owlLinksDashboardApp')
    .controller('NewslettersController', ['$scope', 'NewslettersService', 'toastr',
        function($scope, NewslettersService, toastr) {

            $scope.newsletters = null;

            $scope.loadAll = function() {
                console.log('Carregando newsletters...');

                NewslettersService.getAll()
                    .success(function(newsletters) {
                        $scope.newsletters = newsletters;
                        console.log('Newsletter carregadadas com sucesso');
                    })
                    .error(function(error) {
                        toastr.error('Falha ao carregar a newsletter');
                        console.error(error);
                    });
            }

            $scope.delete = function(newsletter) {
                console.log('Excluindo newsletter ' + newsletter.id);

                NewslettersService.delete(newsletter.id)
                    .success(function() {
                        toastr.success('Newsletter excluída com sucesso.');
                        newsletter.hide = true;
                    })
                    .error(function(error) {
                        toastr.error('Falha ao excluir a newsletter');
                        console.error(error);
                    });
            }

        }
    ]);
