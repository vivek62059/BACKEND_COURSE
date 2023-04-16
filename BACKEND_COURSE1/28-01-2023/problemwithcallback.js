/*
1->inversion of control->promises can resolve this issue.
2->callback hell->readablity problem
*/
function doTask(fn,x){
    //whole implementation is done by team A
    fn(x*x);//calling my callback with square of x
}//team A

//here b team tries to use it.
doTask(function exec(num){//due to caallbacks,I am passing control of how exec should be called to do task.
    //this is inversion of control.
    console.log("number is",num);

},9);