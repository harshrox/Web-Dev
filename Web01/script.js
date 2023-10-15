const col = ["red","blue","yellow"]
let createdDivs = [];
function divCreation(color){
    let div = document.createElement("div")

    div.style.backgroundColor = color
    div.style.margin = "10px"
    div.id = color
    let textNode = document.createTextNode("Harsh")
    div.appendChild(textNode)
    createdDivs.push(div)
    document.body.appendChild(div)

    
}

for(let i =0;i<3;i++){
    
    divCreation(col[i]);
    

}
let hide;
let show;
let num=0;
while(num<6){
    for(let i =0;i<3;i++){
    
    

    

        show = setTimeout(() => {
            createdDivs[i].style.display = col[i];
        }, 1000 * (i + 1));

        
        
        
    
        hide = setTimeout(() => {
            createdDivs[i].style.backgroundColor = "transparent";
        }, 1000 * (i + 1));
    
        
        
    
    }
    num++;
}

