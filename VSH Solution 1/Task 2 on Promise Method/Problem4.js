// Q4. Write a promise function which will display all the records with only name & ages.
// function Name ---> findAll(data)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use map.

const data = [
    {name: "Butters", age: 3,type: "dog" },
    {name: "Lizzy", age: 6, type: "dog"},
    {name: "Red", age: 1, type: "cat" },
    {name: "Joey",age: 3, type: "dog" },
    ];

    const findAll = (data) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = data.map((user) => {
                return `${user.name}, ${user.age}`
            })
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
    findAll(data)