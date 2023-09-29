const persons = [
    {
        name: "Joe",
        animals: [
            {
                species: "dog",
                name: "Bolt",
                age: 23

            },
            {
                species: "cat",
                name: "Billy",
                age: 24
            },

        ]
    },
    {
        name: "Bob",
        animals: [
            {
                species: "dog",
                name: "Snoopy",
                age: 20
            }
        ]
    },

    {
        name: "Slobby",
        animals: [
            {
                species: "cat",
                name: "Snoopy",
                age: 15
            },
            {
                species: "turtle",
                name: "cappy",
                age: 15
            },
            {
                species: "dog",
                name: "cappy",
                age: 10
            }

        ]
    }
];





// Q17 Display average age of dogs.
var sum = 0;
var totalCount = 0;
persons.filter((element)=>{
    element.animals.filter((ele)=>{
        if(ele.species === 'dog'){
            sum += ele.age;
        }
    })
});

persons.filter((element)=>{
    element.animals.filter((ele)=>{
        if(ele.species==='dog'){
            totalCount++;
        }
    })
    
});

console.log(sum/totalCount);