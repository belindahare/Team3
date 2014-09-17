#= require_self
#= require_tree ./controllers/userHome
#= require_tree ./services/userHome

console.log("user.js");

angular.module("team3-ng-userHome",
    [
        "ng-Route"
    ])
    .config(function($routeProvider) {

        $routeProvider

            .when("/:id", {
                templateUrl: "../assets/userHome/userHome.html",
                controller: "userHomeCtrl"
            });
    });