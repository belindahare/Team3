angualr.module("team3-ng-userHome",
    [
        "ng-Route"
    ])
    .config(function($routeProvider) {

        $routeProvider

            .when("/:id", {
                templateUrl: "../../views/userHome.html",
                controller: "userHomeCtrl"
            });
    });