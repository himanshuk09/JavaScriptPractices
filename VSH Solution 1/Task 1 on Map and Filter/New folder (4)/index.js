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
users = [...users, user3];
console.log(users)

// ********************************************************************************************************
// Q.2 first & second both are same 

// *********************************************************************************************************
/*Q.3 Write a  function to display all records only 3 fields id,name,username.
functions : display(users)
HINT : map*/

const newUsers = users.map((user) => {
    return ` ${user.id}, ${user.name}, ${user.username}`
})
console.log(newUsers); 


// **********************************************************************************************************
/*Q.4 Write a  function which will display all records  with name ==='demon'  
function Name ---> findNameEquals(users) 
HINT : Use*/

// const u = users.filter((user) => {
//     return user.name === 'demon';
// })
// console.log(u);


// *********************************************************************************************************************
/*Q5. Write a  function which will display all the records starting with name 'B' or any character passed as parameter.  
function Name ---> findSpecificStartChar(users,'B')  
HINT : Use filter and string functions.*/


/*const findUser = users.filter((fname) => {
    if (fname.name.charAt(0) === 'B') {
        return fname
    }
})
console.log(findUser)*/

// **********************************************************************************************************************
/*Q6.Write a  function which will display sum of all ages.  
function Name ---> findSumAges(users) . 
HINT : Use reduce functions.*/

// const sumOfAge = users.reduce((a, b) => {
//     return a.ages + b.ages;
// })
// console.log(sumOfAge);


// **********************************************************************************************************************
/*Q7. Write a  function which will display all the records with only name & ages.
function Name ---> findAll(users) 
HINT : Use map.*/

// const findAll = users.map((user) => {
//     return `${user.name} ${user.ages}`
// })
// console.log(findAll)

// *********************************************************************************************************************
/* Q8. Write a function to display sum of all ages of records having name starting with 'J'*/

// const findUser = users.filter((fname) => {
//     let ageofJ = 0;
//     if (fname.name.charAt(0) === 'J') {
//         ageofJ += fname.ages
//         console.log(ageofJ)
//         return ageofJ;
//     }
// })

// *********************************************************************************************************************
/*Q9. Write a function which will display all the records in sorting according to names.
function Name ---> Sorting(data,'ASC')   
ASC -> ASCENDING/ DESC -> DESCENDING*/

// const sortUser = users.sort((a, b) => a.name.localeCompare(b.name))
// console.log(sortUser)

// ********************************************************************************************************************
/* Q10 Delete an object with specific array index.
 HINT : splice 
 function : deleteRecord(users,1) // 1 means delete object with index 1 in array.*/

// users.splice(2, 1, 0);
// console.log(users)


// *********************************************************************************************************************
/*Q11. Insert an object at specific array index.
HINT : splice
function : InsertRecord(users,temp,1)*/

// const user4 = {
//     id: 4,
//     name: "vikas",
//     username: "vikas",
//     email: "vikas43@yahoo.com",
//     phone: "1-5 x11708",
//     website: "carme.net",
//     password: "vikas__vikas",
//     ages: 20

// }

// users.splice(2, 0, user4);
// console.log(users)