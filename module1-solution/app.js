(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.resultMessage = "";
	$scope.lunchDishesList = "";

	var getMessage = function (numberOfItems) {
		if (numberOfItems == 0) return 'Please enter data first';
		if (numberOfItems < 4) return 'Enjoy!';
		return 'Too much!';
	};

	$scope.checkIfTooMuch = function () {
		var dishes = $scope.lunchDishesList;
		var nonEmptyDishes = dishes.split(',').filter(function (dish) { return dish; });
		$scope.resultMessage = getMessage(nonEmptyDishes.length);
	};
}

})();