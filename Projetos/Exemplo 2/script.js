var form = angular.module('form', []);

form.controller('FormCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.msg = [];
	$scope.msg['minlength'] = 'Muito curto';
	$scope.msg['required'] = 'Campo obrigatório';
	$scope.msg['email'] = 'Informe o Email corretamente.';
	$scope.msg['idade'] = 'Você precisa ser mais velho.';

	$http.get('http://localhost:8088/formData.json')
		.success(function(data) {
			$scope.formData = data;
		})
		.error(function(data) {
			alert('Algo deu errado');
		});

	$scope.toSave = function()
	{
		$scope.saved = $scope.formData;
		console.log($scope.saved);
		$http.post('http://localhost:8088/formData.php', {'data':$scope.saved})
			.success(function(data) {
				console.log(data);
			});
	}

	$scope.reset = function()
	{
		$scope.formData = null;
	}
}]);

form.directive('idade', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$validators.idade = function(modelValue, viewValue) {
				if (modelValue >= 14)
					return true;
				return false
			};
		}
	}
});