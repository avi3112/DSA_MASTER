
// we can achieve the infinite currying by using below function

function add(a){
    return function(b){
        if(b) return add(a+b)
        return a
    }
}


console.log(add(2)(5)(7)(9)())