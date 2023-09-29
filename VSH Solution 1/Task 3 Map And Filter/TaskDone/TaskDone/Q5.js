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

// Q5 Display all names of owner who has species as dog and turtle


persons.filter((element)=>{
    if(element.animals.filter((element)=>{
        if(element.species!=='cat')
        {
            return true;
        }
    })){
        console.log(element.name);
    }
})
