angular.module("team3-ng-features")
    .factory("redditSvc", function($http, $rootScope, $log) {

        var subReddit = "hockey";
        var urlBase = "http://www.reddit.com/r/" + subreddit + ".json";

        var getReddit = function () {
            return $http.get(urlBase);
        };

        return {
            getReddit: getReddit,
            subRedditName: subReddit
        }

    });