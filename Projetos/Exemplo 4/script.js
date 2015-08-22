var diretivas = angular.module('diretivas', []);

diretivas.controller('Controller', ['$scope', function($scope){
	$scope.name = 'Erik';
}]);

diretivas.controller('NaomiController', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}]);

diretivas.controller('IgorController', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Igor',
    address: '123 Somewhere'
  };
}]);

diretivas.directive('myCustomer', function() {
  return {
    restrict: 'E',
    template: function(e, attr) {
      var validations = '';
      if (attr.maxlength)
        validations = validations + 'maxlength="'+attr.maxlength+'"';
      return '<input type="text" ng-model="customer.name" '+validations+' />';
    }
  };
});