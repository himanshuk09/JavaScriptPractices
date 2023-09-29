// Q4. Write a promise function which will display all the records with only name.
// function Name ---> findAllNames(family)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use map.

const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 22 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 }
    ];

    const findAllNames = (family) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = family.map((user) => {
                return user.name
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
    findAllNames(family)