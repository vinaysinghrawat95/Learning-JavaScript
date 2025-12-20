// const product = {
//     prodName : "Ball Pen",
//     price : 270,
//     rating : 7.4,
//     isDeal : true
// };

// // console.log(product);

// const profile = {
//     fullName : "Shradha Khapra",
//     isFollow : true,
//     followers : 250,
//     post : 50,
//     description : "Hey i'm a ex microsoft employee"
// }

// // console.log(profile);


// let a = 10;
// let b = 30;
// const c = 40.5

// // console.log("a + b + c =  ", a+b+c);

// let mode = "yellow";
// let color;

// if(mode === "white"){
//     color = "white";
//     console.log(color);
// }else if(mode === "dark"){
//     color = "dark";
//     console.log(color);
// }else{
//     color = "yellow";
//     console.log(color);
// }


// let x = 17;
// let output = x > 18 ? "vote" : "not";
// console.log(output);


// let num = prompt("Enter a number");
// if(num % 5 === 0){
//     console.log(num, "is a multiple of 5");
// }else{
//     console.log(num, "is not a multiple of 5");
// }


// let obtainMarks = prompt("Enter your marks");

// if(obtainMarks <= 100 && obtainMarks >= 80){
//     console.log("A");
// }else if(obtainMarks < 80 && obtainMarks >= 70){
//     console.log("B");
// }else if(obtainMarks < 70 && obtainMarks >= 60){
//     console.log("C");
// }else{
//     console.log("F");
// }

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum += i;
// }
// console.log(sum);


// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// let str = "vinay";
// let length = 0;
// for(let i of str){
//     console.log("i = ",i);
//     length++;
// }

// console.log(length);


// let student  = {
//     username : "vinay",
//     age : 21,
//     cgpa : 7.4,
//     isActive : true
// };

// for(let key in student){
//     console.log(key, ":", student[key]);
// }


// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log("Even : ",i);
//     }
// }



// let randomNum = 14;
// let userNumber = prompt("Enter number");

// while(randomNum != userNumber){
//     randomNum = prompt("You entered wrong number, Enter again");
    
// }
// console.log("success"); 

// let nam = "vinay";

// console.log(nam.length);
// nam.length;



// let student  = {
//     username : "vinay",
//     age : 21,
//     cgpa : 7.4,
//     isActive : true
// };

// let specialString = `tha user ${student.username} age is ${student.age} which cgpa is ${student.cgpa} and he is active ${student.isActive}`
// console.log(specialString);


// let str = "vinaySinghRawat";
// console.log(str);

// let enterName = prompt("Enter you full name");

// let userName = "@" + enterName + enterName.length;

// console.log(`Your username is ${userName}`);



/* Arrays */

// let marksArray = [85,97,44,37,76,60];
// // console.log(marksArray);

// let sum = 0;

// for(let i of marksArray){

//     sum += i;
   
// }
// let avg = sum/marksArray.length;
// console.log(`Average is ${avg} and sum is ${sum}`);


// let price = [250, 645, 300, 900, 50];

// for(let i = 0; i < price.length; i++){
//     price[i] -= price[i] * 0.1;
//     console.log(`Price of index ${i} after 10% discount is ${price[i]}`);
// }

// for(let offer in price){
    
//     price[offer] -= price[offer] * 0.1;
//     console.log(`Price of index ${offer} after 10% discount is ${price[offer]}`);

// }

// price.push(80, 90, 120);
// console.log(price);
// let deleteItem = price.pop();

// console.log(deleteItem);
// console.log(price)


// let marvelHeroes = ["Ironman", "Spiderman", "Hulk"];
// let dcHeroes = ["Batman", "Superman"];

// let heroes = marvelHeroes.concat(dcHeroes);

// console.log(heroes);


// let arr = [1,2,3,4,5,6,7,8];
// arr.splice(2,2,103,104);
// console.log(arr);


// let companies = ["Bloomberg", "Microsoft", "Uber","Google", "IBM", "Netflix"];
// console.log("Before ", companies);

// companies.shift();

// companies.splice(1,1,"Ola");

// companies.push("Amazone");

// console.log(companies);


// function greet(){
//     console.log("Bonju");
// }

// greet();

// const sum = (a, b) => {
//     console.log(a+b);
// };

// console.log(sum(18, 8));


// function vowels(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){

//         let chr = str.charAt(i);
//         if(chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u'){
//             count ++;
//         }

//     }
//     console.log(count);
// }

// vowels("Hello");


// let vowels2 = (str) => {
//     let count = 0;
//     for(let i = 0; i < str.length; i++){

//         let chr = str.charAt(i);
//         if(chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u'){
//             count ++;
//         }

//     }
//     console.log(count);
// }

// console.log(vowels2('Hello World'));


// let arr = [1,2,3,4,5,6];

// arr.forEach((val) =>{
//     console.log(val);
// })


// let arr = [2,3,4,5,6];

// function square(num){
//     return num*num;
// }

// arr.forEach((val)=>{

//     console.log(`${val} of sqaure is : ${square(val)}`);

// });


// let arr = [2,3,4,5,6];

// let square = 0;
// arr.forEach((val)=>{

//     square = val * val;
//     console.log(`${val} of sqaure is : ${square}`);

// });

// let arr = [2,3,4,5,6,7];

// let newArr = arr.map((val) =>{
//     console.log(val*val);
// });


// let arr = [90,92,95,22,69,75];

// let newArr = arr.filter((val) => {
//     return val > 90;
// });

// console.log(newArr);




// let num = prompt("Enter any number");
// console.log(factorial(num));

// let factorial = (num) => {
//     let sum = 1;
//     if(num <= 0){
//         return 1;
//     }
//     for(let i = num; i >= 1; i--){
//         sum = sum * i;
//     }
//     return sum;
// }

