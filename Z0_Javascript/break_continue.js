const arr = [1,2,3,4,5,6]

function tocheck(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
        if(i==8){
            break
        }
        
    }
}

const test= tocheck(arr)
console.log(test)


// What is isNaN?

let a =10   // false
let b="10" // false

let c="avi" // true
console.log(isNaN(c))

console.log(eval('3'+'2')) // 32