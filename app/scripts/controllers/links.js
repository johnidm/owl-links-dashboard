'use strict';

angular.module('owlLinksDashboardApp')
    .controller('LinksController', ['$scope', 'LinksService',
        function($scope, LinksService) {

            $scope.links = null;
            $scope.link = null;

            $scope.loadAll = function() {
                console.log('Carregando todos os links...');

                LinksService.getAll()
                    .success(function(links) {
                        console.log('Links carregadadas com sucesso.');

                        $scope.links = links;

                    })
                    .error(function(error) {
                        console.log('Falha ao carregar os link ' + error.message);
                    });
            }

            $scope.findById = function(id) {
                return LinksService.getById(id)
                    .success(function(link){
                        console.log('Consultando link');
                        $scope.link = link;                        
                    })
                    .error(function(error){
                        
                    });
            }

            $scope.delete = function(link) {

                LinksService.delete(link.id)
                    .success(function(){

                    })
                    .error(function(error){

                    });
            }

            $scope.save = function(link) {

                console.log('Salvando link...');

                link.tags = link.tags.split(',');               
                if (link.id === undefined) {
                    LinksService.insert(link);
                }
                else {
                    LinksService.update(link);
                }
            }
        }
    ]);


