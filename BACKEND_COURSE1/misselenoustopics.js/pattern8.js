function pattern(n){
    for(let row=1;row<=n;row++){
        let str="";
        let spaces=n-row;
        for(let i=0;i<=spaces;i++){
            str+=" ";
        }
        //for numbers
        let counter=1;
        for(j=1;j<=row;j++){
            str+=counter;
            counter++;
        }
        let counter2=row-1;
        for(let k=1;k<=row-1;k++){
            str+=counter2;
            counter2--;
        }
        console.log(str);
    }
}
pattern(5);