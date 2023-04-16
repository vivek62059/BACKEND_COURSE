function swap(arr,i,j){
    //function swaps the element of the array at index i and j
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;

}
let arr=[5,9,1,6,3,44];
let i=0;
let j=arr.length-1;
while(i<=j){
    swap(arr,i,j);
    i+=1;
    j-=1;
}
console.log(arr);