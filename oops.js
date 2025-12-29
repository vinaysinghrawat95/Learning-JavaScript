//Prototypes
/*
const taxMap = {
    printTax() {
        console.log("Tex is 10% deducted from your salery.");
    }
} 

const karanArjun = {
    salery : 15000,
    printTax() {
        console.log("Tex is 20% deducted from your salery.");
    }
}

karanArjun.__proto__ = taxMap; 
*/

//Classes , Constructor & Objects
/*
class ToyotaCar{

    constructor(ownerName, cost){
        this.ownerName = ownerName;
        this.cost = cost;  
    }

    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

    setOwner(ownerName){
        this.ownerName = ownerName;
    }

}

let fortuner = new ToyotaCar("Vinay", 100000);
*/


// Inheritance
/*
class Parent{
    property(){
        console.log("Parents property");
    }
}

class Child extends Parent{}

let obj = new Child();
obj.property();
*/


let Data = "College Data";
class User {
    constructor (username, email){
        this.username = username;
        this.email = email;

        console.log(username);
        console.log(email);
        
        
    }

    viewData(){
        console.log("Data: ",Data);
    }
}


class Admin extends User {

    constructor(username, email){
        super(username,email);
    }

    editData(){
        Data = "College data is changed";
        console.log("Data: ",Data);
        
    }
}

let student = new User("vinay", "vinay2@gmail.com");
let adminObj = new Admin("Rohit", "rohit22@gmail.com");
adminObj.editData();


