// ** CARD SCOPE **

const family = [
    { name: "Jack", age: 27 },
    { name: "Jill", age: 22 },
    { name: "James", age: 55 },
    { name: "Aenny", age: 2 }
];

// Q1. Write a  function which will display all the name with age > 26
// function Name ---> findAge(family)
// HINT : Use filter.

// const findAge = family.filter((a) => {
//     return a.age > 26;
// })
// console.log(findAge);


// Q2. Write a  function which will display all the records starting with name 'J' or any character passed as parameter.
// function Name ---> findSpecificStartChar(family,'J')
// HINT : Use filter and string functions.



// const findSpecificStartChar = (fam, char) => {
//     let s = fam.filter((user) => {
//         if (user.name.charAt(0) === 'J') {
//             return user
//         }
//     })
//     console.log(s)
// }
// findSpecificStartChar(family, "J");



// Q3. Write a  function which will display all the records ending  with name  'nny' or any character passed as parameter.
// function Name ---> findSpecificEndChar(family,'nny')
// HINT : Use filter and string functions.


// const findSpecificStartChar = (fam, char) => {
//     let s = fam.filter((user) => {
//         if (user.name.endsWith('nny')) {
//             return user
//         }
//     })
//     console.log(s)
// }
// findSpecificStartChar(family, "J");




// Q4. Write a  function which will display all the records with only name.
// function Name ---> findAllNames(family)
// HINT : Use map.



// const findAllNames = (fam) => {
//     const s = fam.map((user) => {
//         return user.name
//     })
//     console.log(s);
// };
// findAllNames(family)





// Q5. Write a  function which will display all the records in sorting according to names.
// function Name ---> Sorting(family,'ASC')
// ASC -> ASCENDING/ DESC -> DESCENDING.
// HINT : sort on objects.

const sorting = (fam) => {
    const sortUser = fam.sort((a, b) => a.name.localeCompare(b.name))
    console.log(sortUser)
}
sorting(family);

// const findAge = (fam) => {
//     const s = fam.map((user) =>{
//         return user.age
//     })
//     console.log(s);
// };
// findAge(family)

// const findSpecificEndChar = (fam,char) =>{
//     const s = fam.filter((user) =>{
//         if(user.age/10===2){
//             return user
//         }
//     })
//     console.log(s);
// }
// findSpecificEndChar(family,2); 

