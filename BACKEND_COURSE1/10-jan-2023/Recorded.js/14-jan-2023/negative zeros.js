let x=-0;
console.log(x===0);//it is giving true for 0 as well as -0

console.log(Object.is(x,0));
console.log(Object.is(x,-0));

console.log(Math.sign(9));
console.log(Math.sign(-9));

console.log(Math.sign(0));
console.log(Math.sign(-0));