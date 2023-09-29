// Q1. Write a promise function to add a new record at the end of array users using spread operator,
// functions : addLast(users,temp)

const users = [
    {
        id: 2,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password",
        ages: 34
    },
    {
        id: 3,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password",
        ages: 23
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
    ages: 21
}

const addLast = (us, u1) => {
    const add = new Promise((resolve, reject) => {
        if (us && u1)
            resolve([...us, u1]);
        else
            reject("user not found");
    })
    add.then((data) => {
        console.log(data)
    }).catch((e) => {
        console.log(e)
    })
}
addLast(users, user1);
