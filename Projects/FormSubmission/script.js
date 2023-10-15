const button = document.querySelector('input[type="checkbox"]')
const body = document.querySelector("body")




const form = document.querySelector("form")
const blackWhite = document.querySelectorAll(".blackWhite")
const cardview = document.querySelector("#cardView")

button.addEventListener('click',function (e){
    if(button.checked){
        body.style.backgroundColor = "#212121"
        body.style.color = "white"

        blackWhite.forEach(function (element){
            element.style.backgroundColor = "#212121"
        

            element.style.color = "white"
        

            element.style.border = "2px solid white"

        })
        cardview.style.border = "1px solid grey"
        cardview.style.boxShadow = "2px 2px 2px grey"
        
    }
        
    else{
        body.style.backgroundColor = "white"
        body.style.color = "#212121"

        blackWhite.forEach(function (element){
            element.style.backgroundColor = "white"
        
            element.style.color = "#212121"
        
            element.style.border = "2px solid #212121"

        })
        cardview.style.border = "1px solid black"
        cardview.style.boxShadow = "2px 2px 2px black"
        
        
    }   

})

form.addEventListener('submit',function(e){
    e.preventDefault();

    const inpOne = parseFloat(document.querySelector("#numberOne").value);
    const inpTwo = parseFloat(document.querySelector("#numberTwo").value);
    const operation = document.querySelector("#operation").value;
    const result = document.querySelector("#result");

    if(inpOne==='' || isNaN(inpOne) || inpTwo==='' || isNaN(inpTwo)){
        result.innerHTML = "Provide valid input"
    }
    
    else{
        if(operation==='add'){
            const output = (inpOne +inpTwo).toFixed(2);
            
            result.innerHTML=`Output: ${output}`;
        }
        else if(operation==='sub'){
            const output = (inpOne -inpTwo).toFixed(2);
            
            result.innerHTML=`Output: ${output}`;
        }
        else if(operation==='mul'){
            const output = (inpOne *inpTwo).toFixed(2);
            
            result.innerHTML=`Output: ${output}`;
        }
        else{
            const output = (inpOne/inpTwo).toFixed(3);
            
            result.innerHTML=`Output: ${output}`;
        }
        
    }
    
})