var student="vivek";//global scope
function fun(){//global 
    console.log(student);//no error will be given
   // console.log(content);//content will not be access before declaration-
    var student="kumar";//scope of fun
    let content="JS";//content will access post declaration
    if(content=="JS"){
    let hours="120+";
    console.log(content,hours);
}
console.log(student,content);
}
fun();
console.log(student);