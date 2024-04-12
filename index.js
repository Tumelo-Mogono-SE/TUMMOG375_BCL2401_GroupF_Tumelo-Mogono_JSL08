//Declared a variable without initializing it, which will used to store the singleton instance.
let bankBranchInstance;
//Created a class with a constructor method with branchInfo parameter which will take in the banks branch info an argument
//Inside there is a condition which checks if the variable created in the global scope is a null/falsy, which if that's case it assigns the parameter to the property of branchInformation.
//The current instance is then assigned to the bankBranchInstance variable, outside the condition the variable is returned as the signleton instance.
//A method is created called getBankBranchInfo which return the property of branchInformation
class BankBranch {
    constructor(branchInfo) {
        if (!bankBranchInstance){
            this.branchInfomation = branchInfo;
            bankBranchInstance = this;
        }
        return bankBranchInstance;
    }

    getBankBranchInfo () {
        return this.branchInfomation;
    }

}

// Two variable are created which both have assigned to them an object/instance created from the class with the argument passed as the branch information
const branchA = new BankBranch("Rustenburg Mall, Shop 46");
const branchB = new BankBranch("Tlhabane Square, Shop 14");

//Two variable are created to assign to them properties returned from the method called inside the object/instance. 
let branchAInfo = branchA.getBankBranchInfo();
let branchBInfo = branchB.getBankBranchInfo();

//The console log is utilized to showcase that the two instance will display the same branch information to prove the singleton instance
console.log(branchAInfo);
console.log(branchBInfo);

//below a condition is utilized to check whether the two variable created which have assigned to them object's/instance with different argument's for the instance are indeed resulting with the same instance due to the singleton design pattern.
if (branchAInfo === branchBInfo){
    console.log('They are referring to the same instance.');
} else {
    console.log('They are not referring to the same instance.');
};



// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
