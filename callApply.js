//how we access object property inside object using this and outside of object using the object name and property name
//a method of a function can be used in another function using bind ,call

// call vs apply 
// if we have a method in an object and we would like to apply it on another object we use call apply bind.call(we call the method,pass the argument and parameter by comma) apply (same as call just parameters are in array)

const normalPerson={
    firstName:'Rahim',
    lastName:'uddin',
    salary:15000,
    //function in the object is called method
    getFullName:function(){
        console.log(this.firstName,this,this.lastName);
    },
    chargeBill:function(amount,tips,tax){
        console.log(this);
        this.salary=this.salary-amount-tips-tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(200);
// console.log(normalPerson.salary);

const heroPerson={
    firstName:'sakib',
    lastName:'al hasan',
    salary:25000,

}
const zeroPerson={
    salary:500
}
//bind example
//using bind: we have to get capture the method and make a function and then we need to pass a parameter 
//---------------------------------------------------
// normalPerson.chargeBill(200);
// const heroBillCharge=normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// console.log(heroPerson.salary);

// const zeroBillCharage=normalPerson.chargeBill.bind(zeroPerson);
// zeroBillCharage(100);
// zeroBillCharage(100);
//---------------------------------------------------
//call example
//we do not need to capture method and make function and then pass parameter.we call it and pass argument and parameter directly 
// normalPerson.chargeBill.call(heroPerson,500,100,90);
// console.log(heroPerson.salary);
//----------------------------------------------------
//apply example
//we need to pass arguments as array 
normalPerson.chargeBill.apply(heroPerson,[5000,500,100]);
console.log(heroPerson.salary);