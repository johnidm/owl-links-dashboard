'use strict';

angular.module('owlLinksDashboardApp')
    .controller('LinksController', ['$scope', 'LinksService', 'toastr',
        function($scope, LinksService, toastr) {

            $scope.links = null;
            $scope.link = null;
            $scope.tags = null;

            $scope.loadTags = function() {

                console.log('Carregando tags...');

                LinksService.getAllTags().
                    success(function(tags) {
                        $scope.tags = tags;
                        console.log('Tags carregadas com sucesso')
                    })
                    .error(function(error) {
                        toastr.error('Falha ao carregar a lista de tags');
                        console.error(error);
                    });
            }

            $scope.loadAll = function() {
                console.log('Carregando links...');

                LinksService.getAll()
                    .success(function(links) {
                        $scope.links = links;
                        console.log('Links carregadadas com sucesso');
                    })
                    .error(function(error) {
                        toastr.error('Falha ao carregar os links')
                        console.error(error);
                    });
            }

            $scope.findById = function(id) {
                console.log('Consultando link {0}'.format(id));

                return LinksService.getById(id)
                    .success(function(link) {
                        $scope.link = link;
                        console.log('Link encontrado {0} - {1}'.format(link.id, link.url));
                    })
                    .error(function(error) {
                        toastr.error('Falha ao pesquiar link')
                        console.error(error);
                    });
            }

            $scope.delete = function(link) {

                console.log('Excluindo link {0}'.format(link.id));

                LinksService.delete(link.id)
                    .success(function() {
                        toastr.success('Link excluído com sucesso');
                        link.hide = true;
                    })
                    .error(function(error) {
                        toastr.error('Falha ao excluir link')
                        console.error(error);
                    });
            }

            $scope.save = function(link) {
                console.log('Salvando link...');

                link.notifynews = 'N';
                link.tags = link.tags.split(',');

                if (link.id === undefined) {
                    LinksService.insert(link)
                        .success(function() {
                            toastr.info('Link cadastrado com sucesso');
                        })
                        .error(function(error) {
                            toastr.error('Falha ao inserir link');
                            console.error(error);
                        });
                } else {
                    LinksService.update(link)
                        .success(function() {
                            toastr.info('Link atualizado com sucesso');
                        })
                        .error(function() {
                            toastr.error('Falha ao autilizar link');
                            console.error(error);
                        });
                }
            }
        }
    ]);
