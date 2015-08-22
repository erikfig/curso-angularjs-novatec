var form = angular.module('form', []);

form.controller('FormCtrl', ['$scope', function($scope) {

	$scope.msg = [];
	$scope.msg['minlength'] = 'Muito curto';
	$scope.msg['required'] = 'Campo obrigatório';
	$scope.msg['email'] = 'Informe o Email corretamente.';
}]);