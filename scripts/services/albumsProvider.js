angular.module("awesomeMusicApp").service("albumsProvider",["$http", function($http){

	this.getAlbums=function (){
		return $http.get("data/albums.json");
	};
}]);