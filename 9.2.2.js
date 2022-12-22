const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`

const profs = JSON.parse(jsonString)
const persons = profs.list;

persons.forEach((element) => {
    name: element.name;
    age: element.age;
    prof: element.prof; 
});

console.log('persons', persons)