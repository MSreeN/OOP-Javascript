'use strict';

function Person(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);
}

const sree = new Person("sree", new Date(1,1,15))

console.log(sree);