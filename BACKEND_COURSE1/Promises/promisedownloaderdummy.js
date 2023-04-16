function download(url){
    console.log("started downloading content from",url);
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            console.log("completed downloading data in 5s");
            const content="ABCDEF";
            res(content);
        },5000);
    })
}
download("www.xyz.com")
.then(function fulfillHandler(value){
    console.log("content downloaded is",value);
})