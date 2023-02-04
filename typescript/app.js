"use strict";
let myName = "Nahid";
myName = "Jubaid  "; //this code is okey 
// myName=55566  this is not a valid syntax in ts we cannot re-assign difference type of value if we provide value when declaring variable ts automatically declare its type
//but if we do not provide the value of a variable then we can re-declare different type of variable for example 
let data; //if we do not provide any type type script automatically converted into any type
data = 1010; //this is a valid syntax 
data = "Nahid "; //THis is also a valid a valid syntax
//let talk about function  
function anyTypeFunction(a, b) {
    return a + b;
}
// console.log(anyTypeFunction(55,45))
function defineTypeFunction(a, b) {
    return a + b;
}
// console.log(defineTypeFunction("nahid",45)) //this throw me a an error
// console.log(defineTypeFunction(40,60))
//Array declaration
const arr = [];
// arr.push("jubaid")   this method throw an error coz array 
arr.push(456); //its okey 
//multiple type of array 
const multi = []; //using union method
multi.push("nahid");
multi.push(45);
multi.push(false);
multi.push(undefined);
// multi.push(null) //this is throw an error coz i do not defined null type on the array
// Object 
let obj;
obj = {
    name: "nahid",
    age: 19,
    isMarried: false
};
//Any type
let anyTypeVar = "nahid"; //ANY TYPE VARIABLE 
anyTypeVar = 100;
const array = []; //any type ARRAY
array.push(100);
array.push("Nahid");
//Function
let myFunc;
myFunc = () => { };
// function parameter
const additionFunction = (a, b, c = "") => {
    console.log(`Hello ${a} ${b}`);
};
const additionFunctionWithReturn = (a, b, c = 100) => {
    return a + b;
};
//Type alias
const typeWithoutAlias = (a) => {
    return a;
};
const typeWithAlias = (a) => {
    return a;
};
//classes
class Player {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.country = c;
    }
    play() {
        console.log(`name ${this.name} age ${this.age} country ${this.country}`);
    }
}
const playerOne = new Player("Nahid", 21, "Bangladesh");
const PlayerTwo = new Player("Jubaid", 21, "India");
//typescript class act as a type for example 
const classArray = [];
classArray.push(playerOne); //this only possible to push or assign instance of Player 
classArray.push(PlayerTwo);
//class can be used an blueprint of a object 
// access modifire  
//Access modifier is use for private class property ,,Access modifier change default public behavior of a class property
class PlayerWithPrivate {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.country = c;
    }
    play() {
        console.log(`name ${this.name} age ${this.age} country ${this.country}`);
    }
}
const privatePlayerOne = new PlayerWithPrivate("nahid", 21, "Bangladesh");
// privatePlayerOne.name="Jubaid" we cannot access this value
// console.log(privatePlayerOne.name) even we cannot log the private value
console.log(privatePlayerOne.country); //we can log readonly property but we cannot change the value of readonly property
function triangleArea(triangleInfo) {
    return triangleInfo;
}
triangleArea({
    width: 25,
    height: 25,
});
class interfaceClass {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`name ${this.name} age ${this.age} country ${this.country}`);
    }
}
//interface does not work with private class property
// Generics 
// Generics is use for receive type from user, that means we can use something like dynamic type  
// for example 
const addNumber = (obj) => {
    return {
        name: obj.name,
        age: obj.age
    };
};
addNumber({
    name: "nahid",
    age: 20
});
const response = {
    statusCode: 200,
    status: true,
    data: {
        name: "Nahid ",
        age: 20
    }
};
// enums 
var RType;
(function (RType) {
    RType[RType["Success"] = 0] = "Success";
    RType[RType["failure"] = 1] = "failure";
    RType[RType["Error"] = 2] = "Error";
})(RType || (RType = {}));
const responseEnum = {
    statusCode: 200,
    status: true,
    data: {
        name: "Nahid ",
        age: 20
    },
    type: RType.Success //this is return the index of the enum
};
