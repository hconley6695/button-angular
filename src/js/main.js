function MainController($scope) {
	console.log('hello');
	$scope.countUp = 0;


	$scope.counter = function () {
			$scope.countUp = $scope.countUp + 1;
			console.log('Waz up??');
	}
}

MainController.$inject = ['$scope'];
export { MainController };