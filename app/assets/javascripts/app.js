console.log("app.js");

angular.module("team3-ng-features",
    [
        "ngRoute"

    ])
    .config( function($routeProvider) {

        $routeProvider

            .when("/", {
                templateUrl: "../assets/home/home.html",
                controller: "homeCtrl"
            })
            .when("/:id", {
                templateUrl: "../assets/userHome/userHome.html",
                controller: "userHomeCtrl"
            })
            .otherwise( {
                redirectTo: "/"
            });


    });

console.log("here again");