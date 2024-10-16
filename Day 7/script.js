let num=[1,2,3,4,45,5,45];
// let newnum=num.map(x=>x*2);
// console.log(newnum);

// let n=num.filter(num=>num%2==0);
// console.log(n);

// let sum=num.reduce((prev,curr)=>prev+curr,0);
// console.log(sum);

// let pro=num.reduce((prev,curr)=>prev*curr,1);
// console.log(pro);

const student=[
    {name:"Alice",score:50},
    {name:"Bob",score:65},
    {name:"Charlie",score:80},
    {name:"David",score:45},
    {name:"Rahul",score:50}
];
// let score=student.map(x=>x.score);
// console.log(score);

// let sum=student.map(x=>x.score).reduce((prev,curr)=>prev+curr,0);
// console.log(sum);

// let sum=student.filter(x=>x.score>60).map(x=>x.score).reduce((prev,curr)=>prev+curr,0);
// console.log(sum);

// let sum1=student.filter(x=>x.score>60).reduce((x,y)=>x+y.score,0);
// console.log(sum1);

// let n=student.filter(x=>x.score>60).map(x=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(n);

// let n=[1,2,3,4,5,5,6,7,7,2];
// n.forEach((x)=>console.log(x*3));

// sayhello=()=>{
//     console.log("Hello Pookies");
// };
// console.log("start");
// setTimeout(sayhello,3000);
// console.log("end");

console.log("start");
setTimeout(()=>{
    console.log("first");
    setTimeout(()=>{
        console.log("second");
        setTimeout(()=>{
            console.log("third");
        },3000);
    },2000);
},1000);
console.log("end");