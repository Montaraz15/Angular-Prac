angular.module("awesomeMusicApp").directive("album",["albumsProvider", function (albumsProvider){
	return {
		restrict: "AE",
		replace: true,
		templateURL:"views/albumDetail.html",
		scope:{
			datos: "="
		},
		link: function(scope) {
			scope.rutaImg= function (name){
				return albumsProvider.getImageAlbum(name);
			};
		}		
	};
}]);