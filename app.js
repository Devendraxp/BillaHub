let grntBtn = document.querySelector("button");
let url1 = "https://api.thecatapi.com/v1/images/search";
let url2 = "https://catfact.ninja/fact";
function gernateCat()
{   
  
    fetch(url1)
    .then(response => 
        response.json())
        .then(data => {
            document.getElementsByClassName("catImg")[0].style.backgroundImage = `url(${data[0].url})`;
        })
        .catch ( error => 
            alert("Error while fatching the image"));

            fetch(url2)
            .then(response => (
                response.json()
                
            )
                )
                .then(data => {
                    console.log(data.fact)
                    document.getElementById("factP").innerHTML = data.fact;
                })
                .catch(error =>
                    alert("error while facthing the fact"));

}
document.getElementById("GrntBtn").addEventListener("click",gernateCat);