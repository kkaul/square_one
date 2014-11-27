'use strict';

// Declare app level module which depends on views, and components
angular
	.module('app', [
		'ui.router', 
		'ui.bootstrap',
		'xeditable'
		])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('info', {
				url: '/',
				templateUrl: 'templates/info.html',
				controller: 'infoCtrl'
			})
	}])
