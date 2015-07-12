angular.module("awesomeMusicApp").controller("favsController",["$scope","$routeSegment",function ($scope, $routeSegment){

	$scope.toMyAlbums = function (){
		return $routeSegment.startsWith("myAlbums");
	};
	$scope.toMyBands = function (){
		return $routeSegment.startsWith("myBands");
	};
}]);