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

        var getGit = function (z) {
            var urlBaseGit = "https://api.github.com/users/" + z + "/repos";
            return $http.get(urlBaseGit);
        }

        return {
            getReddit: getReddit,
            getRedditContent: getRedditContent,
            getGit: getGit
        }

    });