'use strict';

function Person(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
  ///if we have 1000 of person objects then all those objects will carry around that method 
  //that would be terrible for the performance of the code


  // this.calcAge = function(){
  //    return `${this.firstName} age is ${new Date().getFullYear() - new Date(this.birthYear).getFullYear()}`
  // }
  // console.log(this.calcAge());
}

const sree = new Person("sree", new Date("October 25 2001"))


//creating objs using constructor function

const ram = new Person("ram", "seth")
const rakesh = new Person("rakesh")
const khyathi = new Person("khyathi", new Date("October 25 2001"))


// console.log(rakesh instanceof(Person));


////////////////////own 
function Vehicle(vehicleName, vehicleDate){
  this.name = vehicleName;
  this.manufactureDate = vehicleDate;
}

const toyota = new Vehicle("toyata", new Date("25 apr 2001"));
// console.log(toyota);

///////////////////Prototype

console.log(Person.prototype);

//Here we are defining an function with name calcAge on the prototype property of Person construction function
Person.prototype.calcAge = function(){
  return 2022 - this.birthYear.getFullYear()
}

console.log(sree, sree.calcAge());


const mahesh = new Person("mahesh", new Date("25 oct 2005"))

const naga = new Person("Khyathi", new Date("10 22 22"));

console.log(mahesh, "&" , mahesh.calcAge());
console.log(naga);

//Every object has a property prototype, when we print naga is the console we can see prototype object in naga but it doesn't mean that every object like naga is carrying that prototype property around, it is just the link to the prototype object.
//naga is able to access calcAge because of "Prototypal Inheritance", properties of prototype are getting inherited to naga
console.log(naga.__proto__ === Person.prototype);
console.log(Person.prototype === Person.prototype);

//Person has prototype object and all the objects created using person has link to it so that is why above and below lines are yielding true.

console.log(Person.prototype.isPrototypeOf(naga));
console.log(Object.prototype.isPrototypeOf(Person.prototype));


//Below line returns false because Person.prototype is an object but Person is not an object itself.
//Prototype is not the prototype of Person, but of all the objects that are created using Person
//*****************************************************/
//false because Person is really is not a object so Prototype doesn't really belong to Person but instead to the Objects that are created using the Person
//If you check the line 74 it is returning false because Prototype is also an object so it should also have a prototype object, yes it has, and that is from the Object constructor.
//You can ask question that why prototype inside Person.Prototype is from Object Prototype?
//Answer: Because Object constructor is the function that is called every time we create an object literal and naga prototype is not of the type Object of prototype because it's prototype is created using new Person and same like that prototype inside of Person's prototype is created using the new Object().
console.log(Object.prototype.isPrototypeOf(Person.prototype));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "humans"
console.log(naga,sree);
console.log(naga.hasOwnProperty("firstName"));
console.log(naga.hasOwnProperty("species"));