'use strict';

angular.module('owlLinksDashboardApp')
    .controller('CollectLinkCtrl', ['$scope', 'CollectLinkServ', 
        function ($scope, CollectLinkServ) {

    $scope.links = null;
    
    $scope.loadLinks = function(){
        console.log('Carregando todas as sugestoes de links...');

        CollectLinkServ.getAllLinks()
            .success(function (links) {
                console.log('Links carregadados com sucesso.');                
                $scope.links = links;

            })
            .error(function (error) {
                console.log('Falha ao carregar os links ' + error.message);                
            });       
        
    }

    $scope.deleteLink = function (link) {
        console.log('Excluindo link ' + link.id);

        CollectLinkServ.delete(link.id)
            .success(function () {
                console.log('Link excluído com sucesso.');
                link.hide = true;                
            })
            .error(function (error) {
                console.log('Falha ao excluir link ' + error);            
            });                 
    }

}]);
