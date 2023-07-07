

let avi={
    name:"akshay",
    city:"dehradun",
    getInto:function(){
        console.log(this.name)
    }
}

let avi2={
    name:"test"
}

// never do this
// protype inheritance

avi2.__proto__=avi



