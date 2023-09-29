var data = [
    {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
    },
    {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
    },
    {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
    },
    {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
    },
    {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
    },
    ];
    
    
// Q1. Write a promise function to display all name starting with 'E'.
// funtion : findStartNames(data)
// Hint : Filter

// const findStartNames = (data) => {
//     return new Promise((resolve, reject) => {
//         const newUsers = data.filter((user) => {
//             if(user.name.charAt(0) === 'E'){
//                 return true;
//             }
//         })
//         if (newUsers) {
//             resolve(newUsers)
//         } else {
//             reject("not found");
//         }
//     })
// }
// const asynctag = async() => {
//     const data1 = await findStartNames(data);
//     console.log(data1);
// }
// asynctag();

// Q2. Write a promise function to display all name ending with 'E'.
// funtion : findEndNames(data)
// Hint : Filter

// const findEndNames = (data) => {
//     return new Promise((resolve, reject) => {
//         const newUsers = data.filter((user) => {
//             if(user.name.endsWith('E')){
//                 return true;
//             }
//         })
//         if (newUsers) {
//             resolve(newUsers)
//         } else {
//             reject("not found");
//         }
//     })
// }
// const asynctag = async() => {
//     const data1 = await findEndNames(data);
//     console.log(data1);
// }
// asynctag();


// Q3. Write a promise function to display total sum of all records  pilotingScore+shootingScore.
// function : find(data)
// Hint : reduce.
//const newUsers = data.reduce((user1,user2) => user1+user2.age,0)

const find = (data) => {
    return new Promise((resolve, reject) => {
        const newUsers = data.reduce((user1,user2) => user1+user2.pilotingScore,0)
        const newUsers1 = data.reduce((user1,user2) => user1+user2.shootingScore,0)
        
        if (newUsers1) {
            resolve(newUsers1)
        } else {
            reject("not found");
        }
    })
}
const asynctag = async() => {
    const data1 = await find(data);
    console.log(data1);
}
asynctag();


// Q4. Write a promise function to display total sum of all records  pilotingScore+shootingScore whose isForceUser===true
// function : findForce(data)
// Hint : filter , reduce.


// Q5. Write a promise function to find all records whose isForceUser===true then multiply 6 to each pilotingScore and finally find sum of all  all records  pilotingScore+shootingScore 
// function : findForceTotal(data)
// Hint : filter , map , reduce. 

// Q6. Write async function to call all above function Q1 Q2 Q3 Q4.
// function : async function findAll() {}

// Q7. Write async function in which Q1 output will act as input Q3. 
// function : async function findAllTotal() {}

// Q8. Using nesting of promises peform Q1 output will act as input Q3 function. 

// Q9.Display only name of person having isForce===true and shooting>10 
// Hint : filter and map.

// Q10. Using Promise.all  give a call to Q1 Q2 Q3 functions.

// Q11. Using Promise.race give a call to Q1 Q2. functions.

// Q12. Write a promise function to perform sorting on shooting in ascending order.