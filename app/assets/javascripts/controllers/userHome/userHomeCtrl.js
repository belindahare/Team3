console.log("user controller");
angular.module("team3-ng-userHome")

    .controller("userHomeCtrl", function($scope, $rootScope, $log, $routeParams, $location, $interval, userHomeSvc, redditSvc) {

        $scope.works("This and scope $works");
        $log.info("here in js file");

        redditSvc.getReddit().then(function(items) {
            $log.info(items);
            $scope.redditData = items.data;

        });
    });