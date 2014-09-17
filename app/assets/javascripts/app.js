angular.module("team3-ng-features",
    [
        "team3-ng-userHome",
        "ng-Route"

    ])
    .config( function($routeProvider) {

        $routeProvider

            .when("/", {
                templateUrl: "../templates/home.html",
                controller: "homeCtrl"
            })
            .otherwise( {
                redirectTo: "/"
            });


    });
