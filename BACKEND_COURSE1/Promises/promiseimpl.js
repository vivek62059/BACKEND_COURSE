//task(do using callbacks dont use promises)
//1.write a function to download data from url
//2.write a function to save that downloaded data in a file and return the filename.
//3.write a function to upload the file written in previous step to a new url
function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting to download data from",url);
        setTimeout(function down(){
            console.log("downloading completed");
            const content="ABCDEF";
            resolve(content);

        },6000);
    })
}
function writeFile(data){
    return new Promise(function exec(resolve,reject){
        console.log("started writing a file with",data);
        setTimeout(function write(){
            console.log("completed writing the data in a file");
            const filename="file.txt";
            resolve(filename);
        },5000);
    })
}
function uploadData(file,url){
    return new Promise(function exec(resolve,reject){
        console.log("started uploading",file,"on",url);
        setTimeout(function up(){
            console.log("upload completed");
            const response="SUCCESS";
            resolve(response);

        },2000);
    })
}
download("www.xyz.com")
.then(function processDownload(value){
    console.log("downloading data with following value",value);
    return writeFile(value);

})
.then(function processWrite(value){
    console.log("data written in the file with name",value);
    return uploadData(value);

})
.then(function processUpload(value){
    console.log("we have uploaded with",value);
})