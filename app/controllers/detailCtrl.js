"esversion: 6";

app.controller("DetailCtrl",
 function($scope, $routeParams, $http) {
    console.log("Detail Controller");
    // $scope.detail = $routeParams.detail;

    $scope.

    $http.get('list.json')
        .then((value) => {
            console.log("value", value);
            let list = value.data.list;
            $scope.selectedItem = list[$scope.detail];
        });
});
