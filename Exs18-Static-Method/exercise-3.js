class Person {
  firstName;
  lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(object) {
    return new Person(object.firstName, object.lastName);
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);


const obj2 = {
  firstName: "Mike"
}
const person2 = Person.fromObject(obj2);
console.log(person2.firstName + " " + person.lastName);