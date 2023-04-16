function fun(){
    for(var i=0;i<10;i++){//through let we cant access i outside for loop bu with the help of var we can access i outside for loop also
        //do something
    }
    console.log(i);
}
fun()

function process(x,y){
    if(x>y){
        let temp=x;
        x=y;
        y=temp;
    }
}

var x=9;
var x=10;//var allows redeclaration but let doesnot allow redeclaration

let x=10;
let x=11;//not allowed
