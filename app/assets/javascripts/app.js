<<<<<<< HEAD
#= require_self
#= require_tree ./controllers/home
#= require_tree ./services/home

=======
>>>>>>> 2029b21d652e266447fb51e8c9a41adf6b3cb891
console.log("app.js");

angular.module("team3-ng-features",
    [
<<<<<<< HEAD
//        "team3-ng-userHome",
        "ng-Route"
=======
        "ngRoute"
>>>>>>> 2029b21d652e266447fb51e8c9a41adf6b3cb891

    ])
    .config( function($routeProvider) {

        $routeProvider

            .when("/", {
<<<<<<< HEAD
                templateUrl: "../assests/home/home.html",
=======
                templateUrl: "../assets/home/home.html",
>>>>>>> 2029b21d652e266447fb51e8c9a41adf6b3cb891
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