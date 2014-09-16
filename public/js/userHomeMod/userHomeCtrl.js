angular.module("team3-ng-userHome")

    .controller("userHomeCtrl", function($scope, $rootScope, $log, $routeParams, $location, $interval, $userHomeSvc) {

        $scope.works("This and scope $works");
        $log.info("here in js file");
    });