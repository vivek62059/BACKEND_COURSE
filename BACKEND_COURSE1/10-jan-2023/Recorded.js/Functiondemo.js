function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

// let x=10;
// let result=isEven(x)
// if(result==true){
//     console.log("even");
// }else{
//     console.log("odd");
// }

for(let i=1;i<=20;i++){
    let result=isEven(i);
    if(result==true){
        console.log(i,"even");
    }else{
        console.log(i,"odd");
    }
}