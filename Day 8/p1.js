const myPromise=new Promise((resolve,reject)=>{
    let sucess=true;
    setTimeout(()=>{
        if(sucess)
        {
            resolve("Data Sent Sucessfully");
        }
        else
        {
            reject("Data not Sent");
        }
},5000);
});
myPromise.then(()=>{
    console.log("Data: "+message)
}).catch((error)=>{
    console.log("error");
});
