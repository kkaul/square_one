angular
	.module('app')
	.controller('infoCtrl', ['$scope', function($scope){
			$scope.title = "Square One Solutions";
			$scope.user = {
				name: 'Bob'
			};
		  	$scope.checkName = function(data) {
		    	if (data == '') {
		     	 return "cannot be empty";
		    	}
		  	};

	}]);