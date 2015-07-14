angular.module("awesomeMusicApp").filter("titleAlbum", function (){

		return function (param){
			return param.title+" ("+param.year+") - "+param.band.name;
		}
});