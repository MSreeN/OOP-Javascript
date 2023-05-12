'use strict';

function Person(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.calcAge = function(){
     return `${this.firstName} age is ${new Date().getFullYear() - new Date(this.birthYear).getFullYear()}`
  }
  console.log(this.calcAge());
}

const sree = new Person("sree", new Date("October 25 2001"))

console.log(new Date());

//creating objs using constructor function

const ram = new Person("ram", "seth")
const rakesh = new Person("rakesh")

console.log(rakesh instanceof(Person));