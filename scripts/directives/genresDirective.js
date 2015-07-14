angular.module("awesomeMusicApp").directive("genreDirective",["genresProvider",function (genresProvider){
	return {
		restrict: "A",
		// replace: true,
		templateUrl:"views/generoDetail.html",
		scope:{
			datos:"="
		}

	};
}]);