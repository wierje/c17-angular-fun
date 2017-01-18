app.factory("simpleFactory", function() {

    var myVariable;

    return {
        //getter
        getVariable: function() {
            if (myVariable) {

            } else {
                return "no variable has been set";
            }
        },
        setVariable: function(newVariable) {
            myVariable = newVariable;
        }
    };
});
