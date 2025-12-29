/*
const greet  = ()=>{
    console.log("Hello");
}

setTimeout(greet, 3000);
*/

/* Callback Hell */
// const getData = (dataId, getNextData)=>{
//     setTimeout(() => {
//         console.log(`Id ${dataId} Data`);
//     {
//         if(getNextData){
//             getNextData();
//         }
//     }
//     }, 3000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, ()=>{
//         });
//         });
// });


/* Promises */

// const getData = (id, getNextData) => {
//     return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         console.log("Data ",id);
//         resolve("Successfull.");
//         // reject("some error occured");
//         if(getNextData){
//             getNextData();
//         }
//     }, 3000);
//     });
// }


/* Use of than and catch */

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I'm promise");
//        // resolve("Promise resolve");
//        reject("network error");
//     });
// };

// Use of than
// let promise = getPromise();
// promise.then((res) => {
//     console.log("Resolve sucessfully");
// });

//Use of catch
// let promise = getPromise();
// promise.catch((rej) => {
//     console.log("Promise reject because",rej);
// });


/* Prmoise Chaining */

// const asyncFun1 = ()=>{
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             console.log("Data1");
//             resolve("Sucess");
//         }, 4000);
//     });
// }

// const asyncFun2 = ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("sucess");
//         },4000);
//     });
// }

// console.log("Fatching 1st Data...");

// asyncFun1().then((res) => {
//     console.log("Fatching 2nd Data...");
//     asyncFun2().then((res) => {})
    
// });

/* Promise chaining another type */

// const getdata = (dataId)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//         console.log("Data",dataId);
//         resolve("sucess");
//         },2000);
 
//     });
// }

// getdata(1).then((res) => {
//     return getdata(2);
// }).then((res)=> {
//     return getdata(3);
// }).then((res) => {
//     console.log(res); 
// });

/* Async-Await */

const getdata = (dataId)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
        console.log("Data",dataId);
        resolve("sucess");
        },2000);
 
    });
}

async function checkData(){
    await getdata(1);
    await getdata(2);
}

checkData();