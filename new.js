//making an object for class using new
//to create an instance from class
class Person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
}
const newPerson=new Person('sakib','al hasan',200);
console.log(newPerson);

const friendlyPerson=new Person('mashrafi','ahmed',400);
console.log(friendlyPerson);

//old way to write a class
function Person1(firstName,lastName,salary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.salary=salary;
}
const oldPerson=new Person1('miraz','ahmed',150);
console.log(oldPerson);