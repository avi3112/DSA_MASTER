// like Binary search, binary search over range, 
// binary search over partial sorted range, 
// sliding window method, Two pointer method, 
// greedy algorithms, dynamic programming, backtracking, bitmagic etc.




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


// Flatten object


let user = {
    name: "Vishal",
    address: {
      primary: {
        house: "109",
        street: {             
          main: "21",
          cross: "32"
        }
      }
    }
  };



// let obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };
  //output
//   {
//     user_name: "Vishal",
//     user_address_primary_house: "109",
//     user_address_primary_street_main: "21",
//     user_address_primary_street_cross: "32",
//   }

function flattenobj(ob){
    let newobj= {}
    for(let i in ob){
        if(typeof(i) === 'object'){
            let temp = flattenobj(ob[i])
            for(let j in temp){
                newobj[i +j]= temp[j]
            }
        }else{
            newobj[i]=ob[i]
        }
    }return newobj
}

const result2= flattenobj(user)
console.log(result2)


