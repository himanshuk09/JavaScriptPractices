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





// Q16 Display list average ages of animal species.
var sum = 0;
var totalCount;
persons.filter((element)=>{
    element.animals.filter((ele)=>{
        sum += ele.age;
    })
});

persons.filter((element)=>{
    totalCount = element.animals.length;
});

console.log(sum/totalCount);