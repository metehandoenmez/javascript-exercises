const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

let person2 = person1;
person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

/* person1 and person2 are variables that refer to a specific object.
so changes on these references changes the same object.
we should create a clone to avoid this: */

const clone = {};
for (let key in person1) {
  clone[key] = person1[key];
}


person1.firstName = "John";
person2 = clone;
person2.firstName = "Simon";


console.log("Fixed Cloning")
console.log("vvv")

console.log(person1);
console.log(person2);