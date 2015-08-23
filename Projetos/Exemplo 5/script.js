var usersModel = angular.module('usersModel', ['ngRoute', 'ngResource']);

usersModel.config(function($routeProvider){
	$routeProvider
		.when('/users/add', {
			templateUrl: 'templates/users/form.html',
			controller: 'usersCtrl'
		})
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

usersModel.controller('usersCtrl', ['$scope', 'usersFactory', '$routeParams', '$location', function($scope, usersFactory, $routeParams, $location){

	$scope.list = function()
	{
		$scope.users = usersFactory.query();
	}

	$scope.view = function()
	{
		if ($routeParams.id) {
			$scope.user = usersFactory.get({id:$routeParams.id});
			$scope.titleForm = 'Ediando usuário';
		} else {
			$scope.user = null;
			$scope.titleForm = 'Criando usuário';
		}
	}

	$scope.save = function() {
		if ($routeParams.id)
			usersFactory.update({id:$routeParams.id}, $scope.user, function() {
				$location.path('/users');
			});
		else
			usersFactory.save(null, $scope.user, function() {
				$location.path('/users');
			});
		
	}

	$scope.delete = function(id) {
		if (confirm('Tem certeza que quer remover?')) {
			usersFactory.delete({id:id}, function() {
				$location.path('/users');
			});
			$scope.list();
		}
	}
}]);