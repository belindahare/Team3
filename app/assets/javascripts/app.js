#= require_self
#= require_tree ./controllers/home
#= require_tree ./services/home

console.log("app.js");

angular.module("team3-ng-features",
    [
        "$httpProvider",
        "ng-Route"

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