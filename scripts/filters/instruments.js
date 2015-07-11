angular.module("awesomeMusicApp").filter("instruments", function (){
	return function (param){
		return "( "+ param.join(", ")+" )";
	}
});