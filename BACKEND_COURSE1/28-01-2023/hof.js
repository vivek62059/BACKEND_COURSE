//higher order functions
//there are functon which are passed to  another function as arguments
function f(x,fn){
    //x->number
    //fn->functions
    console.log(x);
    console.log(fn);
    fn();
}
f(10,function exec(){
    console.log("a function which is passed to higher order function");
})


// let arr=[1,101,104,76,75,98];
// arr.sort();//it sort the given array in lexicographical order->dictionary order
// //it is not going to sort the array in increasing order.
// console.log(arr);


let arr=[1,101,104,76,75,98];
arr.sort(function(a,b){
    return a-b;  //if a<b->a-b will be negative->if any comparator function gives negative then  a is placed before b.(a<b)
    //if a>b->a-b will be positive -> if any comparator function gives negative then b is placed before a.(a>b)
    //sort is hof which takes the comparator function as argument. 
});
console.log(arr);