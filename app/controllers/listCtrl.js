"esversion: 6";

app.controller("ListCtrl", function($scope, $routeParams, $http, simpleFactory, varFactory) {
    console.log("list controller");

$scope.thatNumber = $routeParams.someNumber;

$scope.detail = simpleFactory.getVariable();




    $http.get("list.json")
        .then((stuff) => {
            console.log("stuff", stuff);
            stuff.data.list;
        });
});
