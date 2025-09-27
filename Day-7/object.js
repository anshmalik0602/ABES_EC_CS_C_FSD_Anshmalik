const Student = {
    name: "Ansh",
    age: 19,
    branch: "CS",
    section: "C",
Phoneno:{
        primary: "123-456-7890",
        secondary: "987-654-3210"
},
    address: {
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        country: "India"
    },
    hobbies: ["reading", "traveling", "swimming"],
}
//accesing object properties
console.log(Student.name); // Ansh
console.log(Student['name']); // 19

let x = "name";
