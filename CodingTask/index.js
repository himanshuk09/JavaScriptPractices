//webpage vs websites
//map
//set
//table
//called vs calling function
//arguments (forms array )vs rest vs spread oprator

// let fun =()=>{
//     console.log(arguments.length);
//     console.log(arguments);
// }
// fun(1,3,2,1,"hello")
// var count =0
// setTimeout(()=>console.log("hello"),5000)
// var myint=setInterval(()=>{
//     count++;
//     console.log("world")
//     if(count==3)
//     clearInterval(myint)
// },2000)

// let class1={

// }
// ***********************************************************************************************************************
//                                                  PRIME NUMBER
// let n;
// n = parseInt(prompt("Enter the value"));
// console.log(typeof n);
// let flag = true;
// for (let i = 2; i * i <= n; i++) {
//     if (n % i == 0) {
//         flag = false;
//         break;
//         }
//     }
// if (n <= 1) {
//     flag = 0;
//     }
// if (flag == true) {
//     console.log("prime no");
// } else {
//     console.log("Not Prime");
//     }
// console.log("working");

let checkPrime =(n)=>{
    let count =0;
    if(n<2){
        console.log("no is less than 2");
    }
    for(let i=2;i<=n;i++){
        if(n%i==0)
            count +=1;
    }
    if(count>2){
        console.log("Not Prime");
    }
    else{
        console.log("Prime");
    }
}

checkPrime(297)





// ******************************************************************************************************************
// ARMSTRONG NUMBER
/*
var n = 153;
var org = n;
var rem, result = 0;
while (n > 0) {
    rem = parseInt(n % 10);
    console.log(rem);
    result = result + (rem * rem * rem);
    console.log(result);
    n = parseInt(n / 10);
}
if (result == org) {
    console.log("NO is Armstrong");
}
else {
    console.log("no is not Armstrong");
}
*/
// *****************************************************************************************************************
// for loops 
/*let a = [28, 32, 35, 64, 34, 12, 76]
console.log(a.sort());
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

for(let i in a){
    console.log(a[i]);
    if(a[i]==64){console.log("value found at index",i);}
}

a.forEach((val)=>{console.log(val);})

for(let val of a){
    console.log(val);
}
*/
// **************************************************************************

let n = 12454554873;
let m=5;
let count = 0
while (n != 0) {
    n = parseInt(n / 10);
    count++;
}
let sum=0;
for(let i=1;i<=m;i++)
{
    sum+=i;
}
console.log(sum);
console.log(count);