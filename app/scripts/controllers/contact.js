'use strict';

angular.module('owlLinksDashboardApp')
    .controller('ContactsCtrl', ['$scope', 'ContactsServ', 
        function ($scope, ContactsServ) {

    $scope.contacts = null;
    
    $scope.loadContacts = function(){
        console.log('Carregando todos os contatos...');

        ContactsServ.getAllContacts()
            .success(function (contacts) {
                console.log('Contatos carregadadas com sucesso.');  
                $scope.contacts = contacts;

            })
            .error(function (error) {
                console.log('Falha ao carregar os contatos ' + error.message);                
            }); 
    }

    $scope.findById = function (id) {
        console.log('Pesquisando contato ' + id);

        ContactsServ.getById(id)
            .success(function (contact) {
                console.log('Contato econtrado.');
                console.log(contact);
            })
            .error(function (error) {
                console.log('Falha ao pesquisar o contato ' + error);            
            });                 
    }

}]);
