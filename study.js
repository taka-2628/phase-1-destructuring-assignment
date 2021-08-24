//Spread an array
let arr = [1, 2, 3]
let arr2 = [...arr, 4]

console.log(arr)
// LOG: [ 1, 2, 3 ]
console.log(arr2)
// LOG: [ 1, 2, 3, 4 ]


/* Reference
let arr = [1, 2, 3]
let arr2 = arr

arr2.push(4)

console.log(arr)
// LOG: [ 1, 2, 3, 4 ]
console.log(arr2)
// LOG: [ 1, 2, 3, 4 ]
*/


//Spread an object
let catObj = {
    name: 'rose'
};
let catObj2 = {...catObj, age: 9, name: 'ted'};

console.log(catObj)
// LOG: { name: 'rose' }
console.log(catObj2)
// LOG: { name: 'ted', age: 9 }


/* Reference
let catObj = {
    name: 'rose'
};
let catObj2 = catObj;

catObj2.age = 9

console.log(catObj)
// LOG: { name: 'rose', age: 9 }
console.log(catObj2)
// LOG: { name: 'rose', age: 9 }
*/