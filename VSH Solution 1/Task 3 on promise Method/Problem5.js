// Q5. Write a promise function which will display all the records in sorting according to names.
// function Name ---> Sorting(family,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING

const family = [
    { name: "Jack", age: 26 },
    { name: "Jill", age: 22 },
    { name: "James", age: 5 },
    { name: "Jenny", age: 2 }
    ];

    const Sorting = (family) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = family.sort((a, b) => a.name.localeCompare(b.name))
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
    Sorting(family)