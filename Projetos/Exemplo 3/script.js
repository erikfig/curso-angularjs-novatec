var diretivas = angular.module('diretivas', []);

diretivas.controller('filtrosCtrl', ['$scope', function($scope) {
	$scope.name = 'Centro de Treinamento Novatec';
	$scope.money = 1200;
}]);

diretivas.filter('reverse', function() {
  return function(input, uppercase) {

    input = input || '';
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }

    if (uppercase)
    	out = out.toUpperCase();

    return out;
  };
})