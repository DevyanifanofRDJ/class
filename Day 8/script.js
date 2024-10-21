async function fetchData()
{
    let response=await fetchData("https://api.github.com/users?per_page=10");
    let data=await response.json();
    data.forEach((element) => {
        let h1=document.createElement("h1");
        h1.textContent=element.login;
        let a=document.createElement("a");
        a.textContent=element.login;
        a.setAttribute("href",element.html.url);
        let top=document.getElementById("div1");
        top.appendChild(h1);
        top.appendChild(a);
    });
}