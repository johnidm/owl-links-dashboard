'use strict';

angular.module('owlLinksDashboardApp')
  .controller('LoginCtrl', function ($scope) {
  		$scope.submit = function(email, senha) {
  			console.log(email);
  			console.log(senha);
  		};      
  });

  

