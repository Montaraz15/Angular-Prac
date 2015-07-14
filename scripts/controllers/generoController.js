angular.module("awesomeMusicApp").controller("generoController",["$scope","genresProvider", function($scope,genresProvider){
	genresProvider.getGenres().
	then(
		function (res){
			$scope.genres=res.data;
		},
		function (){
			alert("Algo ha ido mal");
		}
		);
}]);