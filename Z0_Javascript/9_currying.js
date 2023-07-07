// we will learn two way to curring the function
// 1 bind function
// 2 clouser

//1>  using bind function

// let multiply1= function(x,y){
//     console.log(x*y)
// }

// let multyply2 = multiply1.bind(this,2)

// multyply2(5)

// let multyply3 = multiply1.bind(this,3)

// multyply3(5)


// 2  using clouser
// outer function will have the access

// let multyply4 = function(x){
//     return function(y){
//         console.log(x*y)
//     }
// }


// let test= multyply4(2)

// test(3)

// let test1= multyply4(3)
// test1(4)


// console.log('First');
// setTimeout(() => console.log('Second'), 0);
// console.log('Third');

console.log('First');
function secondCall() {
  console.log('Second');
}
setTimeout(secondCall, 2000);
setTimeout(() => console.log('Third'), 0);
console.log('Third')





