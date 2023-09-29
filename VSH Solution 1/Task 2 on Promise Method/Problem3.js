// Q3. Write a promise function which will display sum of all ages.
// function Name ---> findSumAges(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use reduce functions.


const data = [
    {name: "Butters", age: 3,type: "dog" },
    {name: "Lizzy", age: 6, type: "dog"},
    {name: "Red", age: 1, type: "cat" },
    {name: "Joey",age: 3, type: "dog" },
    ];

    const findSumAges = (data) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = data.reduce((user1,user2) => user1+user2.age,0)
            if (newUsers){
                resolve(newUsers);
            }
            else
                reject("NO RECORDS FOUND");
        })
        add.then((data) => {
            console.log(data)
        }).catch((e) => {
            console.log(e)
        })
    }
    findSumAges(data)