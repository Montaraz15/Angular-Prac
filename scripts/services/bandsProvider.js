angular.module("awesomeMusicApp").service("bandsProvider",["$http",function ($http){

	this.getBands=function (){
		return $http.get("data/bands.json");
	};
}]);