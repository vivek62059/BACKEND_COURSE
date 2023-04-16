console.log(NaN===NaN);
console.log(0===-0);
console.log(-0===0);
console.log(NaN==="NaN");
let obj={x:10, valueOf() {return 100;}}
console.log(99==obj);
console.log(100==obj);


let obj1={x:10};
let obj2={x:10};
let obj3={y:10};

console.log(obj1===obj2);
console.log(obj1===obj3);
console.log(obj1==obj1);


