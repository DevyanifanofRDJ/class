async function fetchData()
{
    try{
        let response=await fetchData("https://api.github.com/users?per_page=10");
        let data=await response.json();
        data.forEach((user)=>{
            console.log(`login: ${user.login}, node ID: ${user.node_id}, url: ${user.url}`);
        });
    }
    catch(error){
        console.log("Error fetching data: ",error);
    }
}
fetchData();