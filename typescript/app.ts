let myName="Nahid"

myName="Jubaid  " //this code is okey 

// myName=55566  this is not a valid syntax in ts we cannot re-assign difference type of value if we provide value when declaring variable ts automatically declare its type

//but if we do not provide the value of a variable then we can re-declare different type of variable for example 

let data; //if we do not provide any type type script automatically converted into any type

data=1010; //this is a valid syntax 

data ="Nahid " //THis is also a valid a valid syntax

//let talk about function  

function anyTypeFunction (a:any,b:any){ //this parameter type automatically declare as any type
    return a+b
}
// console.log(anyTypeFunction(55,45))

function defineTypeFunction (a:number,b:number){
    return a+b
}

// console.log(defineTypeFunction("nahid",45)) //this throw me a an error
// console.log(defineTypeFunction(40,60))

//Array declaration

const arr:number[]=[]


// arr.push("jubaid")   this method throw an error coz array 
arr.push(456) //its okey 

//multiple type of array 

const multi:(number|string|boolean|undefined)[]=[] //using union method

multi.push("nahid")
multi.push(45)
multi.push(false)
multi.push(undefined)
// multi.push(null) //this is throw an error coz i do not defined null type on the array

// Object 
let obj:{
    name:string,
    age:number,
    isMarried:boolean
}


obj={
    name:"nahid",
    age:19,
    isMarried:false
}

//Any type

let anyTypeVar:any="nahid" //ANY TYPE VARIABLE 

anyTypeVar=100

const array:any[]=[] //any type ARRAY

array.push(100)

array.push("Nahid")



//Function
let myFunc:Function;

myFunc=()=>{} 

// function parameter

const additionFunction=(a:string,b:string,c:string="")=>{//make c is optional of default value
    console.log(`Hello ${a} ${b}`)
}

const additionFunctionWithReturn=(a:number,b:number,c:number=100):number=>{ //declare return type
return a+b 
}


//Type alias

const typeWithoutAlias=(a:number | string):number | string=>{ //without type alias
return a
}

//with alias
type stringOrNumber=number | string

const typeWithAlias=(a:stringOrNumber):stringOrNumber=>{ //with type alias
    return a
}

//classes

class Player{

    name:string;
    age:number;
    country:string;

    constructor(a:string,b:number,c:string){
        this.name=a;
        this.age=b;
        this.country=c
    }

    play(){
        console.log(`name ${this.name} age ${this.age} country ${this.country}`)
    }

}


const playerOne=new Player("Nahid",21,"Bangladesh")
const PlayerTwo=new Player("Jubaid",21,"India")


//typescript class act as a type for example 

const classArray:Player[]=[]

classArray.push(playerOne) //this only possible to push or assign instance of Player 
classArray.push(PlayerTwo)
//class can be used an blueprint of a object 

// access modifire  
//Access modifier is use for private class property ,,Access modifier change default public behavior of a class property


class PlayerWithPrivate{

   private name:string;
   private age:number;
   readonly country:string;

    constructor(a:string,b:number,c:string){
        this.name=a;
        this.age=b;
        this.country=c
    }

    play(){
        console.log(`name ${this.name} age ${this.age} country ${this.country}`)
    }

}

const privatePlayerOne=new PlayerWithPrivate("nahid",21,"Bangladesh")

// privatePlayerOne.name="Jubaid" we cannot access this value

// console.log(privatePlayerOne.name) even we cannot log the private value
console.log(privatePlayerOne.country) //we can log readonly property but we cannot change the value of readonly property

// if we use access modifier we can use constructor this way

// constructor(
//     private name:string,
//     private age:number,
//     readonly country:string,
 
// ){}

// Interface
// Interface is use for full structure of any object or  class 

// for example \\

interface triangle{
    width:number;
    height:number
}

 function triangleArea(triangleInfo:triangle){
return triangleInfo
}

triangleArea({
    width:25,
    height:25,
})

// interface of a class 
interface iPlayer{
name:string,
age:number, 
country: string

play():void
}

class interfaceClass implements iPlayer{
constructor(
    public name:string,
    public age:number,
    public country:string
){}

play(): void {
    console.log(`name ${this.name} age ${this.age} country ${this.country}`)
}
}

//interface does not work with private class property

// Generics 

// Generics is use for receive type from user, that means we can use something like dynamic type  

// for example 

const addNumber=<T extends {
    name:string,
    age:number
}>
(obj:T)=>{
    return {
        name:obj.name,
        age:obj.age
    }
}


addNumber({
    name:"nahid",
    age:20
})


//example 



interface apiResponse<T>{
    statusCode:number
    status:boolean
    data:T //this is a generic type 
}

const response:apiResponse<object>={
statusCode:200,
status:true,
data:{
    name:"Nahid ",
    age:20
}
}


// enums 

enum RType {Success, failure, Error}

interface apiResponseEnum<T>{
    statusCode:number
    status:boolean,
    type:RType
    data:T //this is a generic type 
}

const responseEnum:apiResponseEnum<object>={
statusCode:200,
status:true,
data:{
    name:"Nahid ",
    age:20
},
type:RType.Success //this is return the index of the enum
}