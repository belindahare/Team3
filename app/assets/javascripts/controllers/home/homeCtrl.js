angular.module("team3-ng-features")

    .controller('homeCtrl', function($scope, $log, $interval, homeSvc, redditSvc) {
        $scope.works = "This is just the beginning";
        $log.info("home controller is go");

        $scope.subRedditName = "itookapicture";

        redditSvc.getReddit($scope.subRedditName).then(function(posts) {
            $log.info(posts.data.data.children);
            $scope.posts = posts.data.data.children;

        });

        $scope.getTheReddit = function (x) {
            redditSvc.getReddit(x).then(function(posts) {
                $log.info(posts.data.data.children);
                $scope.posts = posts.data.data.children;

            });
        };

        $scope.subRedditContentName = "news";
        redditSvc.getRedditContent($scope.subRedditContentName).then(function(posts) {
            $log.info(posts.data.data.children);
            $scope.contentPosts = posts.data.data.children;

        });

        $scope.getTheRedditContent = function (y) {
            redditSvc.getRedditContent(y).then(function (posts) {
                $log.info(posts.data.data.children);
                $scope.contentPosts = posts.data.data.children;

            });
        };


        $scope.gitUser = "calweb";
        redditSvc.getGit($scope.gitUser).then(function(posts) {
            $log.info(posts.data);
            $scope.gitPosts = posts.data;
        });

        $scope.getTheGit = function (y) {
            redditSvc.getGit(y).then(function(posts) {
                $log.info(posts.data);
                $scope.gitPosts = posts.data;

            });
        };

        $interval(function() {
            $scope.date = new Date().getTime();
        }, 1000);



    });

console.log("ctrl features");