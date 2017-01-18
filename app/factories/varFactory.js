"esversion: 6";

app.factory("varFactory", function() {
    console.log("varFactory");

    return {
        //getter
        getThatVar: () => {
            return bologna;
        }
        setThatVar: () => {
            bologna = newValue
        }

    }
});
