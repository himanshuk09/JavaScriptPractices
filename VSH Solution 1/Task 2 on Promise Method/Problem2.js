// Q2. Write a promise function which will display all the records starting with name 'B' or any character passed as parameter.
// function Name ---> findSpecificStartChar(data,'B')
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with the data in form of array.
// HINT : Use filter and string functions.

const data = [
    {name: "Butters", age: 3,type: "dog" },
    {name: "Lizzy", age: 6, type: "dog"},
    {name: "Red", age: 1, type: "cat" },
    {name: "Joey",age: 3, type: "dog" },
    ];

    const findSpecificStartChar = (data) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = data.filter((user) => {
                if(user.name.charAt(0) === 'B'){
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
    findSpecificStartChar(data)