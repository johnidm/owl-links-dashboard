'use strict';

angular.module('owlLinksDashboardApp')
    .controller('NewslettersCtrl', ['$scope', 'NewsletterServ', 
        function ($scope, NewsletterServ) {

    $scope.newsletters = null;
    
    $scope.loadNewsletters = function(){
        console.log('Carregando os assinantes da newsletter...');

        NewsletterServ.getAllNewsletters()
            .success(function (newsletters) {
                console.log('Newsletter carregadadas com sucesso.');  
                $scope.newsletters = newsletters;

            })
            .error(function (error) {
                console.log('Falha ao carregar as newsletters ' + error.message);                
            }); 
    }

    $scope.deleteNewsletter = function (newsletter) {
        console.log('Excluindo newsletters ' + newsletter.id);

        NewsletterServ.delete(newsletter.id)
            .success(function () {
                console.log('Newsletter excluída com sucesso.');
                newsletter.hide = true;                
            })
            .error(function (error) {
                console.log('Falha ao excluir a newsletters ' + error);            
            });                 
    }

}]);
