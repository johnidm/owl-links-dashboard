'use strict';

angular.module("owlLinksDashboardApp", ['ui.router', 'toastr'])
    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {

        $httpProvider.defaults.headers.common['api-key'] = '4B5B8A4948F8AA4FF918A353B5CAE';

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/partials/home.html',
                
                data: {
                    title: 'Bem vindo'
                } 

            }).state('collectlinks', {
                url: '/collectlinks',
                templateUrl: 'views/partials/collectlinks.html',
                data: {
                    title: 'Coleção de Links'
                }

            }).state('newsletters', {
                url: '/newsletters',
                templateUrl: 'views/partials/newsletters.html',

                data: {
                    title: 'Newsletters'
                }
            }).state('contacts', {
                url: '/contacts',
                templateUrl: 'views/partials/contacts.html',
                data: {
                    title: 'Contatos'
                }
            }).state('links', {
                url: '/links',
                templateUrl: 'views/partials/links.html',
                data: {
                    title: 'Links'
                }
            }).state('insert-link', {
                url: '/insert-link',
                templateUrl: 'views/partials/insert-link.html',
                data: {
                    title: 'Inserir Link'
                }
            });

    })
    .constant('API_URL', 'http://owl-links-api.herokuapp.com')
    .constant('APP_VERSION', '0.9.1')
    .factory('Helpers', function($http) {
        return {
            isNotString: function(str) {
                return (typeof str !== "string");
            },

            readJsonFile: function(file) {              
                return "not implemented";
            }
        }
    })
    .run(function($rootScope, $state, Helpers) {
        $rootScope.helpers = Helpers;
        $rootScope.$state = $state;
    });
