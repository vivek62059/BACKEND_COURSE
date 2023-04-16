function fetchData(url){
    return new Promise(function (resolve , reject){
        console.log("starting download from",url);
        setTimeout(function processDownloading(){
            let data="dummy data";
            console.log("download completed");
            resolve(data);
        }, 7000);
    });
}
console.log("start");
let promiseObj=fetchData("kjiduh");
promiseObj.then(function A(value){
    console.log("value is",value);
})
console.log("end");