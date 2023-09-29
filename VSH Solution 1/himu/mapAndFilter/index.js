let users = [{
    id: 1,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    ages: 34
},
{
    id: 2,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-543-1857 123212",
    website: "dd.net",
    password: "Dean_hashed_password",
    ages: 23
}
];
// ****************************************************************************************************
/*Q1. Write a function to add a new record at the end of array users using spread operator,
functions : addLast(users,temp)*/


const user3 = {
    id: 3,
    name: "Jerry",
    username: "aditya",
    email: "adityabalbudhe@gmail.com",
    phone: "585256977",
    website: "MyPortfolio",
    password: "Aditya@1234",
    ages: 21
}

users = [...users,user3];
console.log(users);


// ********************************************************************************************************
// Q.2 first & second both are same 

// *********************************************************************************************************
/*Q.3 Write a  function to display all records only 3 fields id,name,username.
functions : display(users)
HINT : map*/


let newUsers = users.map((u)=>{
    return ` ${u.id} , ${u.name} , ${u.username} `;
});

console.log(newUsers);
