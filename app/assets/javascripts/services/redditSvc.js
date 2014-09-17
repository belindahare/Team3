angular.module("brendan-httpCart")
    .factory("httpCartSvc", function($http, $rootScope, $log) {

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