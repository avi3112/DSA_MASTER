//1>>  what is splice and slice?


// slice

// slice not modify the original array

// let arr= [1,2,3,4,5,6]

// let test= arr.slice(0,3)

// console.log(test)


// splice
// we can do add or remove 
// splice modify the original array

let aray= [1,2,3,4,5,6]

aray.splice(0,3)
console.log(aray)


let aaar = [1,2,3,4,5,6]

let test= aaar.splice(0,3)

console.log(test)

let test1= aaar.slice(0,3)
console.log(test1)



// 2>> what is setTImeout and setInterval?

function x(){
    var x=1;

    setTimeout(()=>{
        console.log(x)
    },5000)
    console.log("namaste")
}

x()


function x(){
    var a=1

    setInterval(()=>{
        console.log(a)
    },1000)
}

x()

// 3>> what is rest and spread operator?

// rest

function fruits(...z){
    console.log(z)
}
fruits("apple","banan","kiwi","orange")

//here we are sending argument


// spread 


let breakfast= ["roti","sabji","dal","milk"]

function x(a){
    console.log(a)
}

x(...breakfast)

// here we are taking argent


// 4>> what is object?

// what are the types of objects

var obj ={
    a:"hello",
    b:20
}


// we can access using two below

//1  >> obj.a

//2 >> obj["a"]


// this is way we access the object key

const user={
    name:"ravi",
    age:"24"
}

console.log(Object.keys(user))


//5 what is the diff betweeen map and forEach?

// map returns the value where as ForEach not return the value, it gives undefined

// for map

// let data = [1,2,3,4,5,6]

// let result = data.map((item)=>{
//     return item*2
// })

// console.log(result)

// for each willl give undefined


let data1= [5,4,3,2,1]

let result = data1.forEach((val)=>{
    return val*2
})

console.log(result)

let arr =[1,2,3,4,5,6]


const test5= arr.map((a)=>{
    console.log(a)
})

console.log(test5)


const test2= arr.forEach((a)=>{
    console.log(a)
})

console.log(test2)

// 6>> what is json?

// this is json


// {
//     name:"avinabh",

// }


// 7>> what is deep copy and shallow copy?
let obj= {
    name:"avi"
}

let user1= obj
user1.name="ravi"
console.log(obj.name) // it will change to ravi  -- very bad

// ===========
let x= "anil"

let y = x

y="avinabh"
console.log(x)


// note :
// console.log(obj.name) // it will change to ravi
// when we copy variable thnn it will copy the value
// when we copy object then it copy memory location



//a>>  shallow copy


let obj1={
    name:"test"
}

let userrr= Object.assign({},obj1)

userrr.name="rockstar"
console.log(obj1.name)  // test
console.log(userrr.name)  // rockstar
 
// 8>> what is async and defer?

// when we load web page 2 things happens

// html parsing
// loading the script line by line

// async >> here html parse and fetch paralles and execute and again parsing

// defer >> here first html parsing once done then execute


// 9>> what is CORS?

//CORS >> Access control allow origin

// browser does not allow to share the resource to other origin
// it also not allow to diff port  or domain 

// Access=control-allow-origin

//10 >>What is isNaN?

let a =10   // false
let b="10" // false

let c="avi" // true
console.log(isNaN(c))

console.log(eval('3'+'2')) // 32

//11 >> what is break and continue?

//break will stop the loop once conditon true and continue will skip the loop for d condition.
const arr10 = [1,2,3,4,5,6]

function tocheck(arr10){
    for(let i=0;i<arr10.length;i++){
        console.log(arr10[i])
        if(i==8){
            break
        }
        
    }
}

const test9= tocheck(arr10)
console.log(test9)


//12>>  what is v8 javascript engine?

// v8 is an open sourse high-performance js engine used in google chrome,it wrriten in C++.


// 13>>> Is javascript is compiled and interpreted language?
// javascript is interpreted language means each line and run it,and also sigle threaded.

//14 >> what is purpose if JSON stringify and json parse?
// JSON stringify basically used for convert object to string.
// json parse basically used to change the string to object.


// 15 >> what is the difference in synchronous and asynchronous?

// synchronous execute the code line by line.
//asynchronous wait where code taking time and other code will get execute.

// difference way to deal with asynchronous code.
// a) useCallback
// b) promise
// c) Async and await


// 16 >> what is event listers in javascript?
// event listers waits for the occurence of an event ex: addEventListener()


