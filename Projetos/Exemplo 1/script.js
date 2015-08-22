var helloWorld = angular.module('HelloWorld', []);

helloWorld.controller('MestreCtrl', ['$scope', function($scope){
	$scope.visible = true;
	$scope.toggle = function(b)
	{
		$scope.visible = b;
	}
}]);

helloWorld.controller('helloWorldCtrl',['$scope', function(a){
	var list = [
		{name: 'Alexandre', idade: 22},
		{name: 'Alex', idade: 33},
		{name: 'Anielle', idade: 27}
	];


	a.inserir = function(){
		a.list.push(a.obj);
		a.obj = null;
	}

	a.remover = function(k) {

		a.list.splice(k, 1);
	}

	a.list = list;
}]);

helloWorld.controller('helloWorldNames', ['$scope', function($scope){
	$scope.name = '';
	$scope.lastname = '';

	$scope.update = function()
	{
		$scope.fullName = $scope.name + ' ' + $scope.lastname;
	}
}]);