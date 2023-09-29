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


// Q6 Does all owner has dog as species Justify.
persons.filter((element)=>{
    if(element.animals.filter((ele)=>{
        if(ele.species === 'dog'){
            return true;
        }
    })){
        console.log(element.name + " has dogs");
    }
})
