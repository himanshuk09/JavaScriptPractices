// Q5. Write a function to display sum of all ages of records having type as dog.
// Use nesting promises function which first call Q1 function its output will      be given to Q3 and display total.
// HINT : nesting of promises.

const data = [
    {name: "Butters", age: 3,type: "dog" },
    {name: "Lizzy", age: 6, type: "dog"},
    {name: "Red", age: 1, type: "cat" },
    {name: "Joey",age: 3, type: "dog" },
    ];
    // const newUsers = users.reduce((user1,user2) => user1+user2.ages,0)

    const findAll = (data) => {
        const add = new Promise((resolve, reject) => {
            const newUsers = data.filter((user) => {
                return user.type === "dog"
            })
            if (newUsers){
                resolve(newUsers);
            }
            else
                reject("NO RECORDS FOUND");
        })
        add.then((data) => {
           return data.reduce((user1,user2) => user1+user2.age,0) 
        }).then((data) => console.log(data))
        .catch((e) => {
            console.log(e)
        })
    }
    findAll(data)