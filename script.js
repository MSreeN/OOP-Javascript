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
//Object.Prototype points to null that marks the end of the Prototype chain.
console.log(Object.prototype.isPrototypeOf(Person.prototype));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "humans"
console.log(naga,sree);
console.log(naga.hasOwnProperty("firstName"));
console.log(naga.hasOwnProperty("species"));

//Always remember 
//Array -> Function -> Object
console.log(Array.__proto__ === Function.prototype);//true
console.log(Function.__proto__ == Object.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);//true
//Below line is false because Function is not an instance of any kind of object so it doesn't have __proto__ property on it.
console.log(Function.__proto__ === Object.prototype);

console.log(Array.__proto__);
console.log(Object.getPrototypeOf(naga.__proto__) === Person.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Array.__proto__ == Function.prototype);

//using new Function, it returns an object which is sampleFun here and it has __proto__ on it and that's why below log returns true
const sampleFun = new Function();
console.log(sampleFun.__proto__ == Function.prototype);

//using normal function syntax, sample is an reference to function, so it is not an object that's why below log returns false because sample doesn't have __proto__ on it.
const sample = function(){}
console.log(sample.__proto__ == Object.Prototype);

//Below log returns false because it is same like the normal function so it doesn't have the __proto__ property on it.
const sampleArrow = () => {}
console.log(sampleArrow.__proto__ == Object.prototype);

//below line points to the prototype of the object
console.log(naga.__proto__.__proto__);


//below line points to the __proto__ of the object which is obviously null
console.log(naga.__proto__.__proto__.__proto__);

console.dir(Person.prototype);

//////////////////Prototypes of arrays

const arr = [1,23,5,6]
// below log prints all of the methods on arrays, this arr will not carry those methods, they are from prototypal inheritance
console.log(arr.__proto__);

//defining method on Array prototype
//this is how methods are defined and when we search for any methods online, we always see Array.prototype.method_nae
Array.prototype.sample = function(){}

console.log(arr.__proto__);
console.log(arr);
const arr1 = new Array(1,2,3,4)
console.log(arr1);

console.log(Array.prototype);
console.log(arr1.__proto__);
console.log(typeof arr1);
console.dir(sample.__proto__)

////////////////////////////////////////////////////coding challenge 1

const Car = function(make, speed){
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  this.speed+=10;
  console.log(`current speed is ${this.speed}`);
}

Car.prototype.break = function(){
  this.speed-=5;
  console.log(`current speed is ${this.speed}`);
}

const skoda = new Car("vw", 50)
skoda.accelerate()
skoda.break()
///////////////////ES6 Classes/////////////////////
class Per{
  constructor(firstName, birthDate){
    this.fullName = firstName;
    this.dob = birthDate;
  }
  get age(){
    return new Date().getFullYear() - this.dob.getFullYear();
  }
  
  set fullName(name){
    console.log(name);
    console.log(name);
    if(name.includes(" ")) this.fullName = name
    else console.log(`given name is not full name`);
  }
  calcAge(){
    console.log(`${this.firstName} is ${new Date().getFullYear()- this.dob.getFullYear()} years old.`);
  }
}


///////////////////getters and setters///////////////

const account= {
  owner: "sree",
  movements: [10,20,30,40],
  get latest(){
    return this.movements.slice(-1).pop()
  },
  set latest(num){
    this.movements.push(num)
    return this.movements
  }
}

console.log(account.latest);
console.log(`${account.latest= 500}`);
console.log(account.movements);
console.log();

const sree1 = new Per("sree", new Date("25 oct 2001"));
sree1.calcAge()
Per.prototype.height = function(){
  console.log(`${this.firstName} is ${sree1.age}cm height`);
}
sree1.height()
console.log(Per.prototype);

console.log(sree1.fullName("sree mahesh"));