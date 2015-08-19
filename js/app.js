var app = angular.module('CalebSiteApp', []);

app.controller('MainController', ['$scope', function($scope) {
	$scope.showdropdown = false;
}]);

app.directive('ddr', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var height = element[0].children[0].clientHeight;
			var dropdown = element.children();
		scope.$watch('showdropdown', function() {
			if (scope.showdropdown) {
				element.css('height', height + 'px');
				dropdown.css('bottom', '0px');
			} else {
				element.css('height', '0px');
				dropdown.css('bottom', height + 'px');
			}

		})
	}
	};
});