Promise.resolve("foo")
.then(
    (string)=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            string+="bar";
            resolve(string);

        },20000);
    }),
)
.then((string)=>{
setTimeout(()=>{
    string+="baz";
    console.log(string);

},1);
return string;
})
.then((string)=>{
    console.log(string);
});