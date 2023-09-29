data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Joey',
        age: 7,
        type: 'dog'
    },
];

//Q1. Write a promise function to display all types having dog.
// funtion : findDogs(data)
// Hint : Filter

// const findDogs = (data) => {
//     return new Promise((resolve, reject) => {
//         const dogs = data.filter((dog) => {
//             return dog.type === 'dog'
//         })
//         if (dogs.length) {
//             resolve(dogs)
//         } else {
//             reject("not found");
//         }
//     })
// }
// const asynctag = async() => {
//     const found = await findDogs(data);
//     console.log(found);
// }
// asynctag();

// Q2 Write a promise function to display all names starting with "B".
// function : findSpecific(data,'b');
// Hint : filter

const findSpecific = (data) => {
    return new Promise((resolve, reject) => {
        const newUsers = data.filter((user) => {
            if (user.name.charAt(0) === 'B') {
                return true;
            }
        })
        if (newUsers) {
            resolve(newUsers)
        } else {
            reject("not found");
        }
    })
}
const asynctag = async () => {
    const data1 = await findSpecific(data);
    console.log(data1);
}
asynctag();

// Q3. Write a promise function to display sum of all ages.
// function : findAges(data)
// Hint : reduce

// const findAges = (data) => {
//     return new Promise((resolve, reject) => {
//         const newUsers = data.reduce((user1,user2) => user1+user2.age,0)
//         if (newUsers) {
//             resolve(newUsers)
//         } else {
//             reject("not found");
//         }
//     })
// }
// const asynctag = async() => {
//     const found = await findAges(data);
//     console.log(found);
// }
// asynctag();

// Q4. Write a promise function total of ages of records whose type==='dog' and age>3.
// function : findTotal(data)

// const findTotal = (data) => {
//     return new Promise((resolve, reject) => {
//         const newUsers = data.filter((user1) => {
//         if(user1.type == 'dog' && user1.age>3){
//             let sum =0;
//             sum += user1.age;
//             return sum
//         }

//         })
//         if (newUsers) {
//             resolve(newUsers)
//         } else {
//             reject("not found");
//         }
//     })
// }
// const asynctag = async() => {
//     const found = await findTotal(data);
//     console.log(found);
// }
// asynctag();

