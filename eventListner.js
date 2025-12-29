/*
let btn = document.querySelector("#btn");

btn.onclick = ()=>{
    let box = document.querySelector("div");
    box.style.backgroundColor = "yellow";
    box.style.height = "300px";
    box.style.width = "300px";
    
    box.onmouseover = ()=>{
        box.style.backgroundColor = "red";
        box.style.height = "180px";
        box.style.width = "100px";
    }
}

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = ()=>{
    console.log("you double click button");
}
 */


/*
let btn = document.querySelector("#btn");

btn.addEventListener("click", (evt)=> {
    alert("You submit your form");
})

let box = window.document.querySelector("div");

box.addEventListener("click", (e) => {
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    
    
})

*/

// let btn = document.querySelector("#btn");
// let body = document.querySelector("body");

// let mode =  body.style.backgroundColor = "white";

// btn.addEventListener("click", () => {

//     if(body.style.backgroundColor === "white"){
//         body.style.backgroundColor = "black";
//     }else{
//         body.style.backgroundColor = "white";
//     }
// });


//  Write a Program to reverse a string in JavaScript.
// let str = "vinay";
// let reverseStr = "";

// for(let i = str.length - 1; i >= 0; i--){
//     reverseStr = reverseStr + str[i];
// }

// console.log(reverseStr);


// Write a function to find the largest and Smallest

// const largestNumber = (arr) => {

//     let largest = arr[0];
//     let smallest = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(largest < arr[i]){
//             largest = arr[i];
//         }else{
//             if(smallest > arr[i]){
//             smallest = arr[i];
//             }
//         }
//     }
//     console.log(largest);
//     console.log(smallest);
    

// }

// let arr = [3, 1, 12, 22, 2, 2,120, 223, 2, 23];
// largestNumber(arr);


// Write a program to find duplicate values in an array.

const findDuplicate = (arr) => {
    let duplicate = arr[0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                console.log(arr[j]);
            }
        }
    }
}

let arr = [3, 1, 12, 22, 2, 2,120, 223, 2, 23];
findDuplicate(arr);