let obj= {
    name:"avi"
}

let user= obj
user.name="ravi"
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

//1>>  shallow copy


let obj1={
    name:"test"
}

let userrr= Object.assign({},obj1)

userrr.name="rockstar"
console.log(obj1.name)  // test
console.log(userrr.name)  // rockstar
 