function launchbrowser(browsername){
    if(browsername == "Chrome"){
        console.log("Chrome browser is launching" );
    }
    else if(browsername == "MicrosoftEdge"){
        console.log("MicrosoftEdge browser is launching");
    }
    else{
        console.log("Default brower is launching");
        
    }
}
launchbrowser("MicrosoftEdge")


function runTests(testType){
    switch(testType){
        case "Smoke":
            console.log("Running Smoke Testing");
            break;
        case "Sanity":
            console.log("Running Sanity Testing");
            break;
        case "Regression":
            console.log("Running Regression Testing");
            break;
        default:
            console.log("Running Smoke Test");
            break;
    } 

}
runTests("Sanity")