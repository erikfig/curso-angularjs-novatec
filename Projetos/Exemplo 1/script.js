var helloWorld = angular.module('HelloWorld', []);

helloWorld.controller('MestreCtrl', function($scope){
	$scope.visible = true;
	$scope.toggle = function(b)
	{
		$scope.visible = b;
	}
});

helloWorld.controller('helloWorldCtrl', function($scope){
	var list = [
		{name: 'Alexandre', idade: 22},
		{name: 'Alex', idade: 33},
		{name: 'Anielle', idade: 27}
	];


	$scope.inserir = function(){
		$scope.list.push($scope.obj);
		$scope.obj = null;
	}

	$scope.remover = function(k) {

		$scope.list.splice(k, 1);
	}

	$scope.list = list;
});

helloWorld.controller('helloWorldNames', function($scope){
	$scope.name = '';
	$scope.lastname = '';

	$scope.update = function()
	{
		$scope.fullName = $scope.name + ' ' + $scope.lastname;
	}
});