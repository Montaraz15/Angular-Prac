angular.module("awesomeMusicApp").service("genresProvider",["$http", function ($http){
	this.getGenres=function (){
		return $http.get("data/genres.json");
	};
}]);