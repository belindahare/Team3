angular.module("team3-ng-features")

    .controller('homeCtrl', function($scope, $log, homeSvc) {
        $scope.works = "This is just the beginning";
        $log.info("home controller is go");

    });