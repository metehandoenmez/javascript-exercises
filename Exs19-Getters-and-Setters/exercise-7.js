class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  set firstName(val) {
    this.#firstName = val;
  }
  set lastName(val) {
    this.#lastName = val;
  }
  set age(val) {
    this.#age = val;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get age() {
    return this.#age;
  }
  get fullName() {
    return this.#firstName + " " + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);