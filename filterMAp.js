const users = [
    {firstName : "himanshu", lastName:"khade",age:22},
    {firstName : "piyush", lastName:"wani",age:19},
    {firstName : "ankit", lastName:"khade",age:24},
    {firstName : "mohit", lastName:"Khobragade",age:22}
]
const output= users.filter(x => x.age <23).map(x => x.firstName);
console.log(output)