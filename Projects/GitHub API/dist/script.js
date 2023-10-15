const form = document.querySelector("form");

const img = document.getElementById("image");
const fullName = document.getElementById("name");
const repo = document.getElementById("repo");

form.addEventListener('submit',function(e){
    e.preventDefault();

    const userName = document.getElementById("username").value;
    const requestURL = "https://api.github.com/users/"+userName;
    console.log(requestURL);
    const xhr = new XMLHttpRequest();
    xhr.open('GET',requestURL);
    

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);

            
            img.src = data.avatar_url;
            fullName.innerHTML = data.name || "Name not found";
            repo.innerHTML = data.public_repos +" Repositories";
        } else {
            console.error('Request failed with status ' + xhr.status);
        }
    };

    xhr.send();

    form.reset();

})