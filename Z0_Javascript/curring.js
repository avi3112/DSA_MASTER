// curring using bind and clousure
// same as bind and while calling function will send another parameter

let multipy = function(x,y){
    console.log(x*y)
}

let mul2 = multipy.bind(this,2)
mul2(3 )


let mulclouser = function(x){
    return function(y){
        console.log(x*y)
    }
}

let mulli = mulclouser(2)
mulli(3)