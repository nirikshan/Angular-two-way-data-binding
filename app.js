var app = angular.module('Nirikshan_ko_app',[]);

app.controller('MyContRollEr',function($scope) {
	var info = {
		firstname:'Niriskhan',
		lastname:'Bhusal',
		age:'16'
	}
	$scope.info = info;
})