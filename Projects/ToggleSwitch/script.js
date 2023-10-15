const button = document.querySelector('input[type="checkbox"]')
const body = document.querySelector("body")

button.addEventListener('click',function (e){
    if(button.checked){
        body.style.backgroundColor = "#212121"
    }
    else{
        body.style.backgroundColor = "white"
    }

})