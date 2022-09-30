class Customer {

    firstName: String;
    lastName: String;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Martin","Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);