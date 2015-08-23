var usersModel = angular.module('usersModel', ['ngRoute']);

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

usersModel.controller('usersCtrl', ['$scope', function($scope){
	alert('teste');
}]);