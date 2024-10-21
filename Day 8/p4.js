function fetachData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const student=[
                {name:"alice",score:50},
                {name:"bob",score:65},
                {name:"charlie",score:80},
                {name:"David",score:45},
                {name:"rahul",score:50}
            ];
            resolve(student);
        },4000);
    });
}
fetachData().then((student)=>{
    sum=student.reduce((x,y)=>x+y.score,0);
    console.log(sum);
    }).catch((error)=>{
        console.log(error);
});
