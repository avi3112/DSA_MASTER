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

const result= flattenobj(user)
console.log(result)


