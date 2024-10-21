function fetachData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data={id:1,name:"Rahul",city:"Ghaziabad"};
            resolve(data);
        },4000);
    });
}
fetachData().then((data)=>console.log(data.id))
    .catch((error)=>{
        console.log(error);
});
