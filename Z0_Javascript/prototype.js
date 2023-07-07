let arr =["arkasya","avinabh"]

arr.push()

// how arr getting acess to push method?

let obj ={
    name:"avinabh",
    city:"jamshedpur",
    getinfo:function(){
        console.log(this.name + "from" +this.city) 
    }
}

console.log(obj.name)

// same live above array here object will also get some other properties how?
// incase of function also it gets some properties like: call,apply,bind

// when we create javascript object[array,object,function], javascript engine atomatically attaches
// our object with some hidden property and methods,we can use using dot(.)

// protype=> so bassically attached the object to the original our object,
// thats why we get access to those property and method
//  arr.__proto__.        >> by using this we also get the hidden property and method
//  obj.__proto__.
//  fun.      =>> incase of function


// obj.__proto__   =>> this point to this object  Object.prototype
