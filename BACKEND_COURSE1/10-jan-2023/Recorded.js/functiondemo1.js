function isEven(num){
    if(num%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}

let x=10;
let y=15;
let z=26;

console.log("x is",isEven(x));
console.log("y is",isEven(y));
console.log("z is",isEven(z));