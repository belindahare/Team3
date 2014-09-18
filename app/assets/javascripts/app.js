console.log("app.js");

angular.module("team3-ng-features",
    [
        "ngRoute"

    ])
    .config( function($routeProvider) {

        $routeProvider

            .when("/", {
                templateUrl: "../assets/home/home.html",
                controller: "homeCtrl"
            })
            .when("/:id", {
                templateUrl: "../assets/userHome/userHome.html",
                controller: "userHomeCtrl"
            })
            .otherwise( {
                redirectTo: "/"
            });


    });
    $(document).ready(function(){
      $.ajax({
        url:'http://www.reddit.com/r/CatsStandingUp.json',
        mothod:'GET',
        success:function (data){
          var catUp = "<ul>"
          for(var i = 0; i < 4; i++){
            catUp +=
              "<li>" + "<img src=\""
              + data.data.children[i].data.thumbnail + "\">" + "</li>"
          }

          catUp += '</ul>';

          $(".cats").html(catUp);
          console.log(data.data.children[i].data.thumbnail)
        }

      });


    });
