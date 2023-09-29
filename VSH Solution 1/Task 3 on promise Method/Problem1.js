// Q1. Write a promise function which will display all the name with age > 26
// function Name ---> findAge(family)
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array
// HINT : Use filter.

const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 29 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 }
    ];

    const findAge = (family) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = family.filter((user) => {
                if(user.age > 26){
                    return user.name;
                }
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
    findAge(family)