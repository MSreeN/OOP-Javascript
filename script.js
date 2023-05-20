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


Person.prototype.calcAge = function(){
  return 2022 - this.birthYear.getFullYear()
}

console.log(sree, sree.calcAge());