angular.module("team3-ng-features")
    .factory("redditSvc", function($http, $rootScope, $log) {

        var getReddit = function (x) {
            var urlBase = "http://www.reddit.com/r/" + x + ".json";
            return $http.get(urlBase);
        };

        var getRedditContent = function (y) {
            var urlBaseContent = "http://www.reddit.com/r/" + y + ".json";
            return $http.get(urlBaseContent);
        };

        return {
            getReddit: getReddit,
            //subRedditName: subReddit,
            getRedditContent: getRedditContent,
            //subRedditContentName: subRedditContent
        }

    });