'use strict';

function Person(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);
}

const sree = new Person("sree", new Date(1,1,15))



//creating objs using constructor function

const ram = new Person("ram", "seth")
const rakesh = new Person("rakesh")