// Q2. Write a promise function which will display all the records starting with name 'J' or any character passed as parameter.
// function Name ---> findSpecificStartChar(family,'J')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use filter and string functions.

const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 22 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 }
    ];

    const findSpecificStartChar = (family) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = family.filter((user) => {
                if(user.name.charAt(0) === 'J'){
                    return true;
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
    findSpecificStartChar(family)