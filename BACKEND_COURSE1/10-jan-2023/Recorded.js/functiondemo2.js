function isEven(num){
    if(num%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}

//to check the 1 to 50 is even or odd

for(let i=1;i<=50;i++){
    console.log(i ,"is", isEven(i));
}