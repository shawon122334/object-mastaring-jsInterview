const normalPerson={
    firstName:'Rahim',
    lastName:'uddin',
    salary:15000,
    //function in the object is called method
    getFullName:function(){
        console.log(this.firstName,this,this.lastName);
    },
    chargeBill:function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    }
}
normalPerson.chargeBill(200);
console.log(normalPerson.salary);