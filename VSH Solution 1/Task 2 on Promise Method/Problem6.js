// Q6. Write a promise function which will display all the records in sorting according to names.
// function Name ---> Sorting(data,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING 

const data = [
    {name: "Butters", age: 3,type: "dog" },
    {name: "Lizzy", age: 6, type: "dog"},
    {name: "Red", age: 1, type: "cat" },
    {name: "Joey",age: 3, type: "dog" },
    ];

    const Sorting = (data) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = data.sort((a, b) => a.name.localeCompare(b.name))
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
    Sorting(data)