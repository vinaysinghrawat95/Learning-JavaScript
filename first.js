const url = "https://meowfacts.herokuapp.com/";
let para = document.querySelector(".para");
let paraBtn = document.querySelector(".fact-btn");


// let getData = async() => {
//     console.log("Fetching Data...");
//     let response = await fetch(url);
//     console.log(response);
    
    
//     let data = await response.json();
//     console.log(data);

//     para.innerText = data.data[0];
 
// };

function getData(){
    fetch(url).then((response)=> {
        return response.json();
    }).then((data)=>{
       para.innerText = data.data[0];
    })
}

paraBtn.addEventListener("click",getData);