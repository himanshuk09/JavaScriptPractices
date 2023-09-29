// Q7. Write a promise function which will display all the records with only name & ages.
// function Name ---> findAll(users)  
// If there are no records matching criteria then reject with message "NO RECORDS FOUND"
// If there are records matching criteria then resolve with  the data in form of array. 
// HINT : Use map.


const users = [
    {
    id: 2,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages:34
    },
    {
    id: 3,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages:23
    }
    ];

const user1 = {
    id: 1,
    name: "Aditya Balbudhe",
    username: "adityabalbudhe",
    email: "adityabalbudhe0@gmail.com",
    phone: "9067452349",
    website: "Myportfolio",
    password: "pass@334567",
    ages:21
    }

    const findAll = (users) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = users.map((user) => {
                return `${user.name},${user.ages}`
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
    findAll(users)