(function() {
    'use strict';

    angular
	.module('mjs.seed-angular-bootstrap')
	.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	  .when('/', {
	    templateUrl: 'views/home/home.html',
	    controller: 'HomeController',
	    controllerAs: 'vm'
	  })
	  .otherwise({
	    redirectTo: '/'
	  });
	});

})();