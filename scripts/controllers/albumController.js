angular.module("awesomeMusicApp").controller("albumController",["$scope","albumsProvider",
function($scope,albumsProvider){
	albumsProvider.getAlbums().
	then(
		function (res){
			$scope.albums=res.data;
		},
		function (){
			alert("No se ha podido cargar");
		}
	);
	

}]);