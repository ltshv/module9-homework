const personXML = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const parser = new DOMParser();

const personXmlDom = parser.parseFromString(personXML, "text/xml");

const personsList = personXmlDom.querySelector("list");
const studentsList = personsList.querySelectorAll("student");

let studentResult = {list: []};

studentsList.forEach((item) => {
    let student = Object();

    let personName = item.querySelector("name");
    let personFirstName = item.querySelector('first');
    let personAge = item.querySelector("age");
    let personProf = item.querySelector("prof");
    let personLang = personName.getAttribute("lang");

    student.name = personFirstName.textContent;
    student.age = personAge.textContent;
    student.prof = personProf.textContent;
    student.lang = personLang;

    studentResult.list.push(student);
});

console.log(studentResult);
