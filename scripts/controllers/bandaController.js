angular.module("awesomeMusicApp").controller("bandaController",["$scope","bandsProvider", function($scope,bandsProvider){
	bandsProvider.getBands().
	then(
		function (res){
			$scope.bands=res.data;
		},
		function(){
			alert("Algo fue mal");
		}
		);

}]);