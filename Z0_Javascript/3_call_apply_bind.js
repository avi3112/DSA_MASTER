// this is basically call method

// let name1= {
//     firstname:"avinabh",
//     lastname:"kumar",
//     // printfullname:function(){
//     //     console.log(this.firstname+ "" + this.lastname)
//     // }
// }

// let printfullname= function(hometown,state){
//         console.log(this.firstname + " " + this.lastname+ " from " +hometown +" " + state)
//     }


// printfullname.call(name1,"jamshedpur","jahrkahnd")

// let name2= {
//     firstname:"sachin",
//     last:"techndulkar",
// }

// function borrow

// printfullname.call(name2,"kolkata","kolkata")


//apply()
// now lets talk about apply method
// here we call the argument in array list this is simple


let name1= {
    firstname:"avinabh",
    lastname:"kumar",
    // printfullname:function(){
    //     console.log(this.firstname+ "" + this.lastname)
    // }
}

let printfullname= function(hometown,state){
        console.log(this.firstname + " " + this.lastname+ " from " +hometown +" " + state)
    }


printfullname.apply(name1,["jamshedpur","jahrkahnd"])

let name2= {
    firstname:"sachin",
    last:"techndulkar",
}


printfullname.apply(name2,["kolkata","kolkata"])



//bind method
// kind of similer to call method this will give copy of function we can invoke later

let test= printfullname.bind(name2,"kolkata","kolkata")

test()