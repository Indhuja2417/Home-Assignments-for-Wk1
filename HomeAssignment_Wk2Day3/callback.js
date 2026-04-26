let browser = "Chrome";

function checkBrowserVersion(callback){
    
setTimeout(()=>{
    callback(browser);
},2000)

}

function browserversion(version){
    console.log( "My browser version is : ", version);
    
}
checkBrowserVersion(browserversion);





