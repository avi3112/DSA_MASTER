// let arr= [1,2,[3,4],5,[6,7,[8,9,10],11],12]

// console.log(arr.flat(Infinity))


function flatten(arr){
    let newarr=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let flat= flatten(arr[i])
            newarr=newarr.concat(flat)
        }else{
            newarr.push(arr[i])
        }
    }return newarr
    
}

const result= flatten([1,2,[3,4],5,[6,7,[8,9,10],11],12])
console.log(result)
