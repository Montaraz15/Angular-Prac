
angular.module("awesomeMusicApp",["ngRoute","route-segment","view-segment"]);

angular.module("awesomeMusicApp").config(["$routeSegmentProvider", function($routeSegmentProvider){

    $routeSegmentProvider.when("/albumes","album");
    $routeSegmentProvider.when("/bandas","banda");
    $routeSegmentProvider.when("/generos","genero");

    $routeSegmentProvider.segment("album",{
        controller:"albumController",
        templateUrl:"views/albumView.html",
        resolve:{
            albums:["albumsProvider",function (albumsProvider){
                return albumsProvider.getAlbums();
            }]
        }
    });
    $routeSegmentProvider.segment("banda",{
        controller:"bandaController",
        templateUrl:"views/bandaView.html",
        resolve:{
            bands:["bandsProvider",function (bandsProvider){
                return bandsProvider.getBands();
            }]
        }
    });
    $routeSegmentProvider.segment("genero",{
        controller:"generoController",
        templateUrl:"views/generoView.html",
        resolve:{
            genres:["genresProvider", function (genresProvider){
                return genresProvider.getGenres();
            }]
        }
    });


}]);