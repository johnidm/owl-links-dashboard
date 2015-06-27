'use strict';

angular.module('owlLinksDashboardApp')
    .controller('CollectLinkCtrl', ['$scope', 'CollectLinksService', 'toastr',
        function($scope, CollectLinksService, toastr) {

            $scope.links = null;

            $scope.loadLinks = function() {

                console.log('Carregando coleção de links...');

                CollectLinksService.getAllLinks()
                    .success(function(links) {
                        $scope.links = links;
                        console.log('Links carregados com sucesso');
                    })
                    .error(function(error) {
                        toastr.error('Falha ao carregar os links');
                        console.error(error);
                    });

            }

            $scope.deleteLink = function(link) {
                console.log('Excluindo link ' + link.id);

                CollectLinksService.delete(link.id)
                    .success(function() {
                        toastr.success('Link excluído com sucesso');
                        link.hide = true;
                    })
                    .error(function(error) {
                        toastr.error('Falha ao excluir link');
                        console.error(error);
                    });
            }

        }
    ]);
