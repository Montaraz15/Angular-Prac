
angular.module("awesomeMusicApp").directive("albumDirective",["albumsProvider", function (albumsProvider){

	return {
		restrict: "AE",
		// replace: true,
		templateUrl:"views/albumDetail.html",
		scope: {
			datos: "="
		},
		link: function(scope) {
			scope.rutaImg= function (name){
				return albumsProvider.getImageAlbum(name);
			};
		}		
	};
}]);


