
angular.module("awesomeMusicApp",["ngRoute","route-segment","view-segment"]);

angular.module("awesomeMusicApp").config(["$routeSegmentProvider", function($routeSegmentProvider){

    $routeSegmentProvider.when("/albumes","album");
    $routeSegmentProvider.when("/bandas","banda");
    $routeSegmentProvider.when("/generos","genero");

    $routeSegmentProvider.segment("album",{
        controller:"albumController",
        templateUrl:"views/albumView.html"
    });
    $routeSegmentProvider.segment("banda",{
        controller:"bandaController",
        templateUrl:"views/bandaView.html"
    });
    $routeSegmentProvider.segment("genero",{
        controller:"generoController",
        templateUrl:"views/generoView.html"
    });


}]);