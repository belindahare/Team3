angualr.module("team3-ng-userHome",
    [
        "ng-Route"
    ])
    .config(function($routeProvider) {

        $routeProvider

            .when("/:id", {
                templateUrl: "../templates/userHome.html",
                controller: "userHomeCtrl"
            });
    });