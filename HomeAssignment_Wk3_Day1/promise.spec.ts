
/* let myPromise = new Promise((resolve,reject)=>{
    console.log("promise in pending state");
    
let success = false

if(success){
    resolve("Task completed successfully")
}else{
    reject("Task failed")
}
})

myPromise.then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log(error);
    
})
 */
const { test } = require('@playwright/test');

// Function that returns a Promise
function fetchDataFromDatabase() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from database...");

    setTimeout(() => {
      const data = true; // change to false to test rejection

      if (data) {
        resolve("Data fetched successfully!");
      } else {
        reject("Data not found!");
      }
    }, 3000); 
  });
}


test('Fetch data using Promise', async () => {
  await fetchDataFromDatabase()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
});