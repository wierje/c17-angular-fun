console.log("Boo!");

var app = angular.module("monkeyButtApp", ["ngRoute"]);

app.config(($routeProvider) => {
            $routeProvider
                .when("/", {
                    controller: "MainCtrl",
                    templateUrl: "partials/main.html",
                })
                .when("/list", {
                    controller: "ListCtrl",
                    templateUrl: "partials/list.html",
                });

            app.controller("MainCtrl", function($scope, $http) {
                $scope.potatoes = "baked";
                $scope.ham = "baked";

            });

            app.controller("ListCtrl", function($scope, $http) {
                console.log("list controller");
            });
});
