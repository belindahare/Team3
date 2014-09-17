#= require_self
#= require_tree ./controllers/home
#= require_tree ./services/home

console.log("app.js");

angular.module("team3-ng-features",
    [
//        "team3-ng-userHome",
        "ng-Route"

    ])
    .config( function($routeProvider) {

        $routeProvider

            .when("/", {
                templateUrl: "../assests/home/home.html",
                controller: "homeCtrl"
            })
            .otherwise( {
                redirectTo: "/"
            });


    });

console.log("here again");