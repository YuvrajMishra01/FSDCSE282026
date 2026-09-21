const sumOfDigit =(num) => {
    let sum=0;
    while(num>0){
        let r=num%10;
        sum=sum+r;
        num=Math.floor(num/10);
    }   
    return sum;
}