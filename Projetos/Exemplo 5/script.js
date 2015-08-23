var usersModel = angular.module('usersModel', ['ngRoute', 'ngResource']);

usersModel.config(function($routeProvider){
	$routeProvider
		.when('/users/:id', {
			templateUrl: 'templates/users/view.html',
			controller: 'usersCtrl'
		})
		.when('/users', {
			templateUrl: 'templates/users/index.html',
			controller: 'usersCtrl'
		})
		.when('/users/edit/:id', {
			templateUrl: 'templates/users/form.html',
			controller: 'usersCtrl'
		});



});

usersModel.factory('usersFactory', ['$resource', function ($resource) {
	return $resource(
		'http://localhost:8080/users/:id',
		null,
		{
			'update': {
				method: 'PUT'
			}
		}
	);
}]);

usersModel.controller('usersCtrl', ['$scope', 'usersFactory', '$routeParams', function($scope, usersFactory, $routeParams){

	$scope.list = function()
	{
		$scope.users = usersFactory.query();
	}

	$scope.view = function()
	{
		$scope.user = usersFactory.get({id:$routeParams.id});
	}
}]);