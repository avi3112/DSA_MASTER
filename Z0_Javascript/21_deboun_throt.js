// the way to optimize the search API call 


console.log("debound")

let counter=0
function getdata(){
    console.log("fetching the data" + counter++)
}

function mydebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)
        setTimeout(()=>{
            call()
        },d)
    }
}
 

const betterfunction= mydebounce(getdata,1000)