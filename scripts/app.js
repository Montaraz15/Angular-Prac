
angular.module("awesomeMusicApp",["ngRoute","route-segment","view-segment"]);

angular.module("awesomeMusicApp").config(["$routeSegmentProvider","$routeProvider", function($routeSegmentProvider,$routeProvider){

    // $routeSegmentProvider.when("/","album");
    $routeSegmentProvider.when("/albumes","album");
    $routeSegmentProvider.when("/bandas","banda");
    $routeSegmentProvider.when("/generos","genero");
    $routeSegmentProvider.when("/favoritos","favorito");
    $routeSegmentProvider.when("/favoritos/misalbums","favorito.myAlbums");
    $routeSegmentProvider.when("/favoritos/misbandas","favorito.myBands");
    $routeProvider.otherwise({
        redirectTo: "/albumes"
    });


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
    $routeSegmentProvider.segment("favorito",{
        controller: "favsController",
        templateUrl: "views/favoriteNav.html"
    });
    $routeSegmentProvider.within("favorito").segment("myAlbums",{
        controller: "favAlbumController",
        templateUrl: "views/favAlbumView.html"
    });
    $routeSegmentProvider.within("favorito").segment("myBands",{
        controller: "favBandController",
        templateUrl: "views/favBandView.html"
    });


}]);