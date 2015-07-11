angular.module("awesomeMusicApp").directive("bandDirective",["bandsProvider",function (bandsProvider){
	return {
		retrict:"A",
		replace:true,
		templateUrl: "views/bandDetail.html",
		scope: {
			datos: "="
		}

	};
}]);