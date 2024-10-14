// let a=()=>{
//     console.log("Arrow function");
// };
// let b=()=>console.log("arrow function 1");
// a();
// b();
// let c=(x,y)=>{
//     return x+y;
// }
// let res=c("Rahul","Ravi");
// let res1=c(12,11);
// console.log(res);
// console.log(res1);

// function display()
// {
//     let p1=document.querySelectorAll("p");
//     p1[0].innerHTML="Iam in Paragraph";
//     p1[0].style.backgroundColor="red";
//     p1[1].innerHTML="Hello World!";
//     p1[1].style.backgroundColor="green";
// }

// function hello()
// {
//     let p1=document.querySelector("h1");
//     p1.innerHTML="Hello World!";
//     p1.style.backgroundColor="yellow";
//     let a1=document.querySelector("a");
//     a1.setAttribute("href","https://aktu.ac.in");
//     a1.innerHTML="AKTU Website";
// }

function divi()
{
    let d=document.querySelector("div");
    d.textContent="New Div";
    const body=document.querySelector("body");
    body.appendChild(d); 
}