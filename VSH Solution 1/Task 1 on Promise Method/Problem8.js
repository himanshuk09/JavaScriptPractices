// Q8. Write a function to display sum of all ages of records having name starting with 'B'
// Use nesting promises function which first call Q1 function its output will      be given to Q3 and display total of ages.
// function : findNameAges(users,'B')
// HINT : nesting of promises.

const users = [
    {
    id: 2,
    name: "Bonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages:34
    },
    {
    id: 3,
    name: "Bean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages:23
    },{
        id: 3,
        name: "Jean John",
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
            const newUsers = users.filter((user) => {
                return user.name.charAt(0) === "B"
            })
            if (newUsers){
                resolve(newUsers);
            }
            else
                reject("NO RECORDS FOUND");
        })
        add.then((data) => {
           return data.reduce((user1,user2) => user1+user2.ages,0) 
        }).then((data) => console.log(data))
        .catch((e) => {
            console.log(e)
        })
    }
    findAll(users)