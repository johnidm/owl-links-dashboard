'use strict';

angular.module("owlLinksDashboardApp", ['ui.router'])
	.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
  		
  		$httpProvider.defaults.headers.common['api-key'] = '4B5B8A4948F8AA4FF918A353B5CAE';  		

  		$urlRouterProvider.otherwise('/home');
    
	    $stateProvider
	        	        
	        .state('home', {
	            url: '/home',
	            templateUrl: 'views/partials/home.html'
	        })        
	        
	        .state('collectlinks', {
	        	url: '/collectlinks',
	            templateUrl: 'views/partials/collectlinks.html'
	        
	        })

	        .state('newsletters', {
	        	url: '/newsletters',
	            templateUrl: 'views/partials/newsletters.html'
	        
	        });
    	
	})
	.constant('API_URL','http://owl-links-api.herokuapp.com/')
    .constant('APP_VERSION','0.9.1');