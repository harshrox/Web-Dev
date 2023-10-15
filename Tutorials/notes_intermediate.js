/*
DOM stands for "Document Object Model." It is a programming interface for web documents and represents the page so that 
programs can change the document structure, style, and content dynamically. 

DOM (Document Object Model) selector is a programming concept used in web development to target and manipulate elements in 
an HTML document.

Types of DOM selector--
    1) getElementById

        Example-
                var element = document.getElementById("myElementId");
                element.style.backgroundColor = "yellow"            // style and backgroundColor = property of selected dom element


        Some properties----

                    1) innerHTML  -> to get contents inside a html element inluding html tags inside it
                           
                                    Ex->    let element = <h1 id="test"> Hello everyone <span id="harsh"> This is Harsh</span></h1>
                                    
                                    var element = document.getElementById("test");
                                    element.innerHTML         // Output = Hello everyone <span id="harsh"> This is Harsh</span>
                                        
                    2) innerText  -> to get text contents inside a html element exluding those who are hidden

                                    Ex->    let element = <h1 id="test"> Hello everyone <span id="harsh" style="display:none"> This 
                                                            is Harsh</span></h1>
                                    
                                    var element = document.getElementById("test");
                                    element.innerText         // Output = Hello everyone

                    3) textContent  -> to get text contents inside a html element inluding those who are hidden

                                    Ex->    let element = <h1 id="test"> Hello everyone <span id="harsh" style="display:none"> This 
                                                            is Harsh</span></h1>
                                    
                                    var element = document.getElementById("test");
                                    element.textContent         // Output = Hello everyone This is Harsh
                                
    2) querySelector --> selects the first element only 

        Example--> 
                    <div >
                        <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <input type="password" name="" id="">

                        <ul>
                            <li class="list-item">one</li>
                            <li class="list-item">two</li>
                            <li class="list-item">three</li>
                            <li class="list-item">four</li>
                        </ul>
                    </div>

                    const element = document.querySelector("h1")  --> selects the first h1 tag
                    const element = document.querySelector("#title")  -->selects the id
                    const element = document.querySelector(".heading")  -->selects the class
                    const element = document.querySelector("input[type="password"]") -->selects the specific input with type password
                    
                    
                    const myul = document.querySelector("ul")
                    const listOne = myul.querySelector("li") -->selects the first list
                    listOne.style.backgroundColor = "black"
                    listOne.innerText   --> output = one
                    listOne.innerText = "five"   // to change the value


    3) querySelectorAll  -> selects all the elements and returns a node list (not equal to array so can't call map but can call forEach)

        Example--> 
                    <div >
                        <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <input type="password" name="" id="">

                        <ul>
                            <li class="list-item">one</li>
                            <li class="list-item">two</li>
                            <li class="list-item">three</li>
                            <li class="list-item">four</li>
                        </ul>
                    </div>



                    const temp = document.querySelectorAll('li')
                    // temp = nodelist(4)  [li,li,li,li]
                    temp.style.backgroundColor = 'green'            // cannot apply this

                    temp[0].style.backgroundColor = 'green'         // can apply this 

                    // To apply property to all elements , use forEach

                    temp.forEach(function (listElement) {

                        listElement.style.backgroundColor = 'green'
                    })


    4) getElementsByClassName --> returns a HTML collection ( has no looping operations)

                                // but we can convert it to array

        Example--> 
                    <div >
                        <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <input type="password" name="" id="">

                        <ul>
                            <li class="list-item">one</li>
                            <li class="list-item">two</li>
                            <li class="list-item">three</li>
                            <li class="list-item">four</li>
                        </ul>
                    </div>


                    const classes = document.getElementsByClassName('list-item')  // return HTML collection

                    const convertedArray = Array.from(classes)   //returns array with all operations like map , forEach , etc

                    // to apply the property to all elements of same class use forEach

                    convertedArray.forEach(function (sameClass){
                        sameClass.style.backgroundColor = 'green';
                        sameClass.style.color = 'blue' 
                    })


// PARENT AND CHILD


<body style="background-color: #212121; color: #fff;">
    <div class="parent">
        <!-- this is a comment -->
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
<script>
    const parent = document.querySelector('.parent')
    console.log(parent);
    console.log(parent.children);              // returns html collection of children
    console.log(parent.children[1].innerHTML);

    for (let i = 0; i < parent.children.length; i++) {
        console.log(parent.children[i].innerHTML);
        
    }
    parent.children[1].style.color = "orange"

    console.log(parent.firstElementChild);    // to get first children element  Ex- <div class="day">Monday</div>
    console.log(parent.lastElementChild);  // to get last children element

    const dayOne = document.querySelector('.day')   // to get first element of .day class
    console.log(dayOne);
    console.log(dayOne.parentElement);      // to directly get the parent element of a children (it is better not to use
                                                                                                 querySelector all the time as it 
                                                                                                requires tree traversal everytime)
    console.log(dayOne.nextElementSibling);  // to get next sibling
 
    console.log("NODES: ", parent.childNodes);   // IMPORTANT // returns node list of the the elements of the tree
                                                // Even nextline is included in the tree
</script>





// HOW TO CREATE NEW DOM ELEMENT

<body style="background-color: #212121; color: #fff;">
    
</body>
<script>
    const div = document.createElement('div')
    console.log(div);  // returns <div></div>
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")  // better way than div.title , since div.title has to overwrite the property
                                                    (requires 2 tree traversals , pehle pakar ke lana fir value change karna)
                                                // but setAttribute just has to add functionality to the already existing property
                                                    (requires 1 tree traversals . bas value change kar dena)
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    div.innerText = "Chai aur code"

    const addText = document.createTextNode("Chai aur code")    --> adding text to the div (better than div.innerText = "text")
    div.appendChild(addText)

    document.body.appendChild(div)     // necessary to attach the div to the body in order to view it on the website
</script>






// Events in JS


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>htnml Events </title>
</head>
<body style="background-color: #414141; color: aliceblue;">
    <h2>Amazing image</h2>
    <div >
        <ul id="images">
            <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
            <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" ></li>
            <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
   </div>
</body>
<script>
    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
    
    document.querySelector('#images').addEventListener('click', function(e){
        console.log(e.target.tagName);

        // To remove IMG element along with its 'Li' only when
        // clicked on it.
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()

            //removeIt.parentNode.removeChild(removeIt)
        }
    
        
    })
    
    
</script>
</html>


document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
}, false)

Here false denotes event bubbling

Event bubbling is a phase of event propagation

There are two phases of event propagation:
    1) Event bubbling -> 
        When an event occurs on a nested element (e.g., a button 
        inside a div), the event starts at the target element 
        (the innermost element where the event occurred) and then 
        bubbles up through the ancestors of that element to the 
        root of the document (usually the <html> element).

        It is the default phase of event propagation and is denoted by
        false parameter.

    2) Event capture-
        In the event capture phase, the event starts at the root of
        the document and trickles down through the DOM hierarchy to 
        the target element where the event originally occurred.

        It is denoted by true parameter
    
Event propagation from child to parent or parent to child can be stopped
by e.stopPropagation()



*/