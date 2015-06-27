'use strict';

angular.module('owlLinksDashboardApp')
    .controller('ContactsCtrl', ['$scope', 'ContactsService', 'toastr',
        function($scope, ContactsService, toastr) {

            $scope.contacts = null;
            $scope.contact = null;

            $scope.loadContacts = function() {
                console.log('Carregando contatos...');

                ContactsService.getAll()
                    .success(function(contacts) {
                        $scope.contacts = contacts;
                        console.log('Contatos carregadadas com sucesso.');

                    })
                    .error(function(error) {
                        toastr.error('Falha ao carregar os contantos')
                        console.error(error);
                    });
            }

            $scope.findById = function(id) {
                console.log('Pesquisando contato ' + id);

                ContactsService.getById(id)
                    .success(function(contact) {
                        $scope.contact = contact;
                        console.log('Contato encontrado {0}'.format(contact.id));
                    })
                    .error(function(error) {
                        toastr.error('Falha ao pesquisar contanto');
                        console.error(error);
                    });
            }

            $scope.delete = function(contact) {
                console.log('Excluindo contanto ' + contact.id);

                ContactsService.delete(contact.id)
                    .success(function() {
                        toastr.success('Contanto excluído com sucesso');
                        contact.hide = true;
                    })
                    .error(function(error) {
                        toastr.error('Falha ao excluir contanto');
                        console.error(error);
                    });
            }

        }
    ]);
