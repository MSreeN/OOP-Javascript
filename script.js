"use strict";

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  ///if we have 1000 of person objects then all those objects will carry around that method
  //that would be terrible for the performance of the code

  // this.calcAge = function(){
  //    return `${this.firstName} age is ${new Date().getFullYear() - new Date(this.birthYear).getFullYear()}`
  // }
  // console.log(this.calcAge());
}

const sree = new Person("sree", new Date("October 25 2001"));

//creating objs using constructor function

const ram = new Person("ram", "seth");
const rakesh = new Person("rakesh");
const khyathi = new Person("khyathi", new Date("October 25 2001"));

// console.log(rakesh instanceof(Person));

////////////////////own
function Vehicle(vehicleName, vehicleDate) {
  this.name = vehicleName;
  this.manufactureDate = vehicleDate;
}

const toyota = new Vehicle("toyata", new Date("25 apr 2001"));
// console.log(toyota);

///////////////////Prototype

console.log(Person.prototype);

//Here we are defining an function with name calcAge on the prototype property of Person construction function
Person.prototype.calcAge = function () {
  return 2022 - this.birthYear.getFullYear();
};

console.log(sree, sree.calcAge());

const mahesh = new Person("mahesh", new Date("25 oct 2005"));

const naga = new Person("Khyathi", new Date("10 22 22"));

console.log(mahesh, "&", mahesh.calcAge());
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

//Always remember
//Array -> Function -> Object
console.log(Array.__proto__ === Function.prototype); //true
console.log(Function.__proto__ == Object.prototype);

console.log(Function.prototype.__proto__ === Object.prototype); //true
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
const sample = function () {};
console.log(sample.__proto__ == Object.Prototype);

//Below log returns false because it is same like the normal function so it doesn't have the __proto__ property on it.
const sampleArrow = () => {};
console.log(sampleArrow.__proto__ == Object.prototype);

//below line points to the prototype of the object
console.log(naga.__proto__.__proto__);

//below line points to the __proto__ of the object which is obviously null
console.log(naga.__proto__.__proto__.__proto__);

console.dir(Person.prototype);

//////////////////Prototypes of arrays

const arr = [1, 23, 5, 6];
// below log prints all of the methods on arrays, this arr will not carry those methods, they are from prototypal inheritance
console.log(arr.__proto__);

//defining method on Array prototype
//this is how methods are defined and when we search for any methods online, we always see Array.prototype.method_nae
Array.prototype.sample = function () {};

console.log(arr.__proto__);
console.log(arr);
const arr1 = new Array(1, 2, 3, 4);
console.log(arr1);

console.log(Array.prototype);
console.log(arr1.__proto__);
console.log(typeof arr1);
console.dir(sample.__proto__);

////////////////////////////////////////////////////coding challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`current speed is ${this.speed}`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`current speed is ${this.speed}`);
};

const skoda = new Car("vw", 50);
skoda.accelerate();
skoda.break();
///////////////////ES6 Classes/////////////////////
class Per {
  constructor(firstName, birthDate) {
    this.fullName = firstName;
    this.dob = birthDate;
  }
  get age() {
    return new Date().getFullYear() - this.dob.getFullYear();
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert("not a full name");
  }
  ///these non static methods are called instance methods
  calcAge() {
    console.log(
      `${this._fullName} is ${
        new Date().getFullYear() - this.dob.getFullYear()
      } years old.`
    );
  }

  /////static method
  static staticInClass() {
    console.log("hey this is static method form/inside class");
  }
}

///////////////////getters and setters///////////////

const account = {
  owner: "sree",
  movements: [10, 20, 30, 40],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(num) {
    this.movements.push(num);
    return this.movements;
  },
};

const sree1 = new Per("sree mahesh", new Date("25 oct 2001"));
sree1.calcAge();
Per.prototype.height = function () {
  console.log(`${this.firstName} is ${sree1.age}cm height`);
};
sree1.height();
console.log(Per.prototype);
console.log(sree1);
//////////////////static methods/////////////////
//example of static method is Array.form
//Array.form is an static methods and it can't be called on the array like usual methods
//Array.from method is defined on the array constructor function not on the prototype.
console.log(Array.from(document.querySelectorAll("h1")));
console.log(Number.parseFloat("3.2er"));

///defining static method on the Per
//Objects created using Per cannot access this method
Per.staticMethod = function () {
  console.log("hey this is static method");
};

/////////////Object.create////////////////

const PersonProto = {
  calcAge() {},

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  setName(name) {
    this.fullName = name;
  },

  setDob(date) {
    this.dob = date;
  },
};

//here we are linking the prototype of sreeCreate to the prototype of the PersonProto object.
//In constructor function and classes this linking was automatically performed.

const sreeCreate = Object.create(PersonProto);
//setting properties
sreeCreate.setName("sree");
sreeCreate.setDob(new Date("25 oct 2001"));
console.log(sreeCreate);

/////////Inheritance between Object.create///////////////

//proto of studentProto is PersonProto
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, courseName) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = courseName;
};
console.log(StudentProto);
//proto of mah is StudentProto
const mah = Object.create(StudentProto);
mah.init("sree", new Date("25 oct 2001"), "computers");
console.log(mah);

/////////////////challenge 2 //////////////////
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`current speed is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`current speed is ${this.speed}`);
    return this;
  }

  get speedUs() {
    console.log(
      `current speed of car(${this.speed}) in miles/hour is ${this.speed / 1.6}`
    );
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
    console.log(`${speed} in kilometers/hour is ${this.speed}`);
  }
}

const ford = new CarCl("ford", 120);
console.log(ford);
ford.accelerate();
ford.brake();
ford.speedUs;
ford.speedUs = 78.125;

//////////////////Inheritance//////////////////////

const Student = function (firstName, dob, course) {
  //since we are using inheritance below two properties are already present on the Person object so if we re declare them here it leads to code duplication hence we shouldn't use these here
  // this.firstName = firstName;
  // this.dob = dob;
  //Call method will set the this keyword to Person  and extra parameters can be provided next to this keyword
  //we want this keyword inside Person function to simply be the this inside Student
  //But the thing is if person has any methods which we want to access here will not be accessible because now the this is pointing to Student and those methods are implemented on the Person
  Person.call(this, firstName, dob);
  this.course = course;
};
//now student.prototype inherits from the person.prototype
//Now Student.prototype.__proto__ == Person.prototype //true
//wkt object.create method sets __proto__ object of whatever is on the left hand (Student.prototype) to what ever it is provided to Object.create  (Person.prototype)
Student.prototype = Object.create(Person.prototype);
//we cant do Student.prototype = Person.prototype because, it will totally change the student.prototype what we instead want here is to set or link student.prototype.__proto__ (as a child) to the Student.prototype(as a parent)
//testing
//testing commits
//testing commits line2

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName}`);
};
//With this line added now student.constructor points to the constructor of the Student, previously it was pointing to the constructor of the person.
Student.prototype.constructor = Student;
const sreeStudent = new Student("sree student", new Date("25 oct 2001"), "cse");
console.log(sreeStudent);
sreeStudent.introduce();
console.log(sreeStudent.calcAge());

/////////////////challenge 3///////////////////////////

// class CarCl{
//   constructor(make, speed){
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate(){
//     this.speed = this.speed + 10;
//     console.log(`current speed is ${this.speed}`);
//   }

//   brake(){
//     this.speed -= 5;
//     console.log(`current speed is ${this.speed}`);
//   }

//   get speedUs(){
//     console.log(`current speed of car(${this.speed}) in miles/hour is ${this.speed/1.6}`);
//   }

//   set speedUs(speed){
//     this.speed = speed * 1.6;
//     console.log(`${speed} in kilometers/hour is ${this.speed}`);
//   }
// }

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//we are linking the Ev to the Car making Ev class as a child class and Car as parent
Ev.prototype = Object.create(Car.prototype);

//Ev constructor points to the constructor of Car so we re-assign it to the constructor of Ev
Ev.prototype.constructor = Ev;

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}%`
  );
};

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new Ev("Tesla", 0, 50);
tesla.accelerate();
tesla.chargeBattery(100);
console.log(tesla);
tesla.break();
tesla.break();
tesla.accelerate();
//these methods are accessible through prototype inheritance from Car
tesla.break();
tesla.accelerate();
console.log(tesla);

////////////////////////////Inheritances between Es6 classes///////////////////////////////////

// class Per{
//   constructor(firstName, birthDate){
//     this.fullName = firstName;
//     this.dob = birthDate;
//   }
//   get age(){
//     return new Date().getFullYear() - this.dob.getFullYear();
//   }

//   set fullName(name){
//     console.log(name);
//     if(name.includes(" ")) this._fullName = name
//     else alert("not a full name")
//   }
//   ///these non static methods are called instance methods
//   calcAge(){
//     console.log(`${this.firstName} is ${new Date().getFullYear()- this.dob.getFullYear()} years old.`);
//   }

//   /////static method
//   static staticInClass(){
//     console.log("hey this is static method form/inside class");
//   }
// }
///inheriting form the above class

class StudentCl extends Per {
  constructor(firstName, dob, branchName) {
    //super keyword needs to be set first
    //super keyword set the this keyword then we can access or set other properties to this keyword.
    super(firstName, dob);
    this.brachName = branchName;
  }
}

//student calcAge is defined on the Per parent class and sreeStudentCl is inheriting that method through prototypal inheritance
const sreeStudentCl = new StudentCl(
  "sree mahesh",
  new Date("oct 25 2001"),
  "computers"
);
console.log(sreeStudentCl);
sreeStudentCl.calcAge();

// const s = "ElEphANT".split();
// const res = [];
// s.forEach(ele => {
//   if(ele == ele.toUpperCase()){
//     res.push(ele.toLowerCase());
//     console.log("");
//   }
//   else if(ele == ele.toLowerCase()){
//     res.push(ele.toUpperCase());
//     console.log("--------");
//   }
// })

// console.log(res);

//////Encapsulation: Protected properties and methods/////
//public fields
//public methods
//private fields
//private methods

class Account {
  //public field(instances)
  // _movements = [];
  locale = navigator.language;

  // private fields(instances)
  #movements = [];
  #pin;
  constructor(name, currency, pin) {
    this.name = name;
    // this.locale = navigator.language;
    this.currency = currency;
    this.#pin = pin;
    //protected property and developers don't use property with _ outside class.
    // this._movements = []
  }

  getMovements() {
    return this.#movements;
  }

  // _approveLoan(){
  //   return true;
  // }

  //public method
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    return this.deposit(val);
  }

  requestLoan(val) {
    if (this.#approveLoan) {
      this.deposit(val);
    }
    return this;
  }

  //private methods
  //lets make _approveLoad method private because it should be used internally not externally

  //this private method is set on instance not on prototype
  #approveLoan() {
    return true;
  }

  //static methods available on prototype not instance, can only call this method using class name.
  static helper() {
    console.log("this is static helper method");
  }
}

const sreeAcc = new Account("sree", "rupee", "123");

//if we try to access private property outside class we get an error
// console.log(sreeAcc.#movements);
// console.log(sreeAcc.#pin);

//if we try to access private property outside class we get an error
//chrome sees this private approve loan method as private field not as method
// console.log(sreeAcc.#approveLoan(1000));
console.log(sreeAcc);

////////////////chaining of methods////////////
//chaining methods can only be possible if every method in that chain returns something(object) then only next method can work on that returned object;

sreeAcc.deposit(500).withdraw(400).requestLoan(100).withdraw(200);

console.log("after chaining methods", sreeAcc);

// The Complete JavaScript Course 29
// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// class CarCl{
//   constructor(make, speed){
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate(){
//     this.speed = this.speed + 10;
//     console.log(`current speed is ${this.speed}`);
//   }

//   brake(){
//     this.speed -= 5;
//     console.log(`current speed is ${this.speed}`);
//   }

//   get speedUs(){
//     console.log(`current speed of car(${this.speed}) in miles/hour is ${this.speed/1.6}`);
//   }

//   set speedUs(speed){
//     this.speed = speed * 1.6;
//     console.log(`${speed} in kilometers/hour is ${this.speed}`);
//   }
// }

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    // console.log(this);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const classTesla = new EVCL("tesla", 0, 20);
console.log(classTesla);
classTesla.accelerate().brake().chargeBattery(80);

console.log(classTesla);
