angular.module("awesomeMusicApp").controller("NavController",["$scope","$routeSegment", function($scope,$routeSegment){

    $scope.toAlbum = function(){
        return $routeSegment.startsWith("album");
    };
    $scope.toBanda = function(){
        return $routeSegment.startsWith("banda");
    };
    $scope.toGenero = function(){
        return $routeSegment.startsWith("genero");
    };
}]);
