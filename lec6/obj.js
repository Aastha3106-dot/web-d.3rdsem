//create an object with :
//name = "Ravi"
//marks=80;
//grade="A";
//create a method updategrade() that changes the grade to : 
   //  A+

// let student = {
//     name: "Ravi",
//     marks: 80,
//     grade: "A",

//     updategrade: function() {
//         this.grade = "A+";
//     }
// };

// student.updategrade();

// console.log(student);
// overloading parameterx CSSMathNegate, orveriding body chnge
class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

    // Method overriding
    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

// Object of Employee
let employee = new Employee(101, "Rahul", 30000);

// Object of Manager
let manager = new Manager(102, "Aastha", 50000, 10000);

// Display salaries
console.log("Employee Salary:", employee.calculateSalary());
console.log("Manager Salary:", manager.calculateSalary());