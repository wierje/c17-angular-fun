"esversion: 6";

console.log("configFactory!");

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/", {
            controller: "MainCtrl",
            templateUrl: "partials/mainPartial.html",
        })
        .when("/list", {
            controller: "ListCtrl",
            templateUrl: "partials/listPartial.html",
        })
        .when('/list/:detail', {
            controller: 'DetailCtrl',
            templateUrl: 'partials/detailPartial.html',
        })
        .otherwise({
            redirectTo: '/'
        });
});
