"esversion: 6";

app.controller("MainCtrl", function($scope, $http, simpleFactory, varFactory) {
    console.log("Main Controller");

    $scope.functiony = (arg) => {
        console.log("Whoop");
        console.log("arg", arg);
    };

    $scope.thingFromFactory = varFactory.getThatVar();

    $scope.setter = (newVal)=>{
      console.log("newVal", newVal);
      varFactory.setThatVar(newVal);
    };




    // $scope.myVariable = "here it is;";

    // $scope.mainVar = simpleFactory.getVariable();

    // $scope.setVariable = function(newVariable){
    //   console.log("new variable is", newVariable);
    //   simpleFactory.setVariable(newVariable);
    // };

});
