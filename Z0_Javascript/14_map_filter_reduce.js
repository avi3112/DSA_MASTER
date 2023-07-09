// what is map, filter and reduce?

// map()
// map,filter,reduce allow chaining
// when we want to transform the array

const arr = [5,1,3,2,6]


function triple(x){
    return x*3
}

const test= arr.map(triple)
console.log(test)

const output= arr.map((val)=>{
    return val*2
})

console.log(output)



// filter()
// if we want to filter from array based on some logic like, odd,even

function iseven(x){
    return x%2 ===0
}


const test1 = arr.filter(iseven)

console.log(test1)


// grethan than 4

// function greter(x){
//     return x>4
// }

// const test2= arr.filter(greter)
// console.log(test2)

const test3 = arr.filter((x)=>{
    return x>4
})

console.log(test3)


// reduce function >> it takes 2 parameter  
// to find sum of all the element

function findsum(arr){
    let sum= 0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}

console.log(findsum(arr))


// =========
// accumlater =sum
// current == arr[i]

const test5 = arr.reduce(function(acc,curr){
    acc=acc+curr
    return acc
},0)


console.log(test5)


// now lets find max from the arrr

function findmax(arr){
    let max= 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max= arr[i]
        }
    }return max
}

console.log(findmax(arr))

// now using reduce find the same

const tes6= arr.reduce(function(max,curr){
    if(curr>max){
        max=curr
    }
    return max
},0)

console.log(tes6)


// ==================================diff example

// tricky example


const users=[
    {firstnmae:"avinabh",lastname:"kumar",age:26},
    {firstnmae:"akshay",lastname:"kumar",age:40},
    {firstnmae:"ravi",lastname:"kumar",age:26}
]

//how to show full name

const test10=users.map((x=> x.firstnmae+x.lastname))

console.log(test10)


// how to same age 
// acc ={}

const out= users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]= ++ acc[curr.age]

    }else{
        acc[curr.age]=1
    }
    return acc
},{})

console.log(out)


//==========================================
//first name of people whose agee is less than 30

const tes0= users.filter((x)=> x.age <30).map((x)=>x.firstnmae)

console.log(tes0)