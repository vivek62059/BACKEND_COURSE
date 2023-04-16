//task(do using callbacks dont use promises)
//1.write a function to download data from url
//2.write a function to save that downloaded data in a file and return the filename.
//3.write a function to upload the file written in previous step to a new url

function download(url,cb){
    /**
     * downloads content from thr given url and passed the
     * downloaded content to the given callback cb
     */
    console.log("starting to download data from",url);
    setTimeout(function down(){
        console.log("downloding completed");
        const content="ABCDEF";//assume dummy downloading content
        cb(content);

    },4000);
}
     function writeFile(data,cb){
        /**
         * this function writes a data into a new file
         */
        console.log("started writing a file with",data);
        setTimeout(function write(){
            console.log("completed writing a data in the file");
            const filename="file.txt";
            cb(filename);

        },5000);
     }
     function upload(url,file,cb){
        /**
         * this function uploads the data from file to a new url
         */
        console.log("started uploading",file,"on",url);
        setTimeout(function up(){
            console.log("upload completed");
            const response="SUCCESS";
            cb(response);
        },2000 );
     }
download("www.xyz.com",function processDownload(content){
    console.log("we are going to process the downloded data");
    writeFile(content,function processWrite(filename){
        console.log("we have downloaded and writem the file,now will upload");
        upload("www.upload.com",filename,function processUpload(response){
            console.log("we have uploaded with",response);
        })
    })
})
