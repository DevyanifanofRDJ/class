// "use strict";
// let $=12;
// var a=45;
// let name1="Devyani";
// const PI=2.14;
// let d=[1,2,3,4];
// let e={
//     name1:"yeah yeah",
//     id:"nooooo"
// };
// let x="12"/"6";
// console.log(x);
// function display()
// {
//     console.log(a);
// }
// let f=true;
// console.log($);
// console.log(PI);
// console.log(typeof PI);
// console.log(typeof name1);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// let g=true;
// let str=String(g);
// console.log(str.charAt(1));
// function display()
// {
//     let x=prompt("Enter your name:","Devyani");
//     alert(x);
// }

function validate()
{
    let login=document.getElementById("login").Value;
    let pass=document.getElementById("pass").Value;
    let p1=document.getElementById("result");
    if(login=="admin"&&pass=="admin")
    {
        p1.innerText="Login sucessful";
    }
    else
    {
        p1.innerText="Login Failed";
    }
    return false;
}