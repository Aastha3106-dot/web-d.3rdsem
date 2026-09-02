const a={
    name: "Aastha"
}
//......object with multi function
let c={
    age:20,
    job:"teacher",
    details: function(){
        console.log("my name is:"+ this.age);
        console.log("my job is:"+ this.job);
    },
    profile:"assistant professor",
}




let employ = {
    name: "Rahul",
    salary: 15000,

    increaseSalary: function(amount) {
        this.salary += amount;
    }
};

employ.increaseSalary(5000);

console.log(employ.name);
console.log(employ.salary);


//......same function with different object
function show(){
    console.log("my name is:"+ this.name);
    console.log("my job is:"+ this.job);
}
e={
    name:"Aastha",
    job:"teacher",
    show:show
}
f={
    name:"Rahul",
    job:"engineer",
    show:show
}
e.show();
f.show();


function college() {
    let obj = {
        dep: "CSE AIML",
        class: "AIML-2"
    };

    console.log("Department:", obj.dep);
    console.log("Class:", obj.class);
}

college();




