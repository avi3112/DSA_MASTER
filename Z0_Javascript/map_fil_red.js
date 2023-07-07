// tricky example


const users=[
    {firstnmae:"avinabh",lastname:"kumar",age:26},
    {firstnmae:"akshay",lastname:"kumar",age:40},
    {firstnmae:"ravi",lastname:"kumar",age:26}
]

//how to show full name

const test=users.map((x=> x.firstnmae+x.lastname))

console.log(test)


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
