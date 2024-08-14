/*1 const arr = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 10]
let arr1 = arr.filter((value) => {
    if (value % 2 != 0) {
        return value;
    }
})
console.log(arr1)
 */
/*2 const arr = ["apple", "banana", "jackfruit", "pineapple"]
console.log(arr.includes("apple")) */

/*3 let arr = [10, 20, 30]
arr.push(40)
console.log(arr)
arr.pop()
console.log(arr); */

/*4 let arr = [1, 2, 3]
arr.forEach((value) => {
    console.log(value * 2)
}) */

/* 5 let arr = [1, 2, 3, 4, 5]
console.log(arr.slice(1, 4)); */

/* 6 let arr = [10, 20, 30, 40, 50]
let arr1 = arr.splice(1, 2, 60)
console.log(arr);
 */

/* 7 let arr = ["cat", "dog", "elephant"]
let arr1 = arr.filter((value) => {
    if (value.length === 3) {
        return value
    }
})
console.log(arr1)
console.log(arr); */


/* 8 let arr = ["apple", "banana"]
arr.forEach((value) => {
    console.log(value.toLocaleUpperCase())
}) */

/* 10 let arr = [10, 20, 30, 40, 50]
arr.splice(2, 2);
console.log(arr) */

/* 11 let arr = [5, 7, 8, 10, 12]
let arr1 = arr.find((value) => {
    if (value % 2 == 0) {
        return value
    }
})
console.log(arr1); */


/* 12 function testscope() {
    var x = 10;
    let y = 20;
    const z = 30;
    if (true) {
        var x = 40;
        let y = 50;
    }
    console.log(x);
    console.log(y);
    console.log(z);
} testscope() */

/* 13 let arr = [1, 2, 3]
let arr1 = arr.map((value) => {
    return value ** 2
})
console.log(arr1); */

/* 14  let arr = ["banana", "apple", "cherry"]
console.log(arr.sort()) */

/*15 let data = [{
    name: "charlee",
    age: 21
}, {
    name: "bala",
    age: 21
}, {
    name: "alice",
    age: 17
}]
const data1 = data.map((value) => {
    return value.name
})
console.log(data1.sort())
 */