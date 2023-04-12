let arr=[1,2,3,4,5]
let sum=0;
let count=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count=count+1;
  }
}
console.log(sum/count);