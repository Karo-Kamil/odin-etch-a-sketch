container = document.querySelector("#container");
btn = document.querySelector("button");
divs = document.createElement("div");
divs.classList.add("border");




function getOpacity (element) {
    const style = window.getComputedStyle(element);
    return parseFloat(style.opacity);
}



function randomColor () {
    const hex = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex.at(Math.floor(Math.random() * 16))
    }
    return color;
}

btn.addEventListener("click", () => {
    let newRes = 0;
    do {
        newRes = prompt("If you continue this will create a new canvas with your desired resolution");
    }
    while (newRes < 1 || newRes > 100);
    const content = document.querySelectorAll(".border");
    container.replaceChildren();
    fresh(+newRes);
})

container.addEventListener("mouseover", (event) =>{
    let target = event.target;
    console.log(target.class)
    if (!(target.id === "container")){
        let newOpacity = getOpacity(target) + 0.1;
        target.style.opacity = newOpacity.toFixed(1);
        if (!target.style.backgroundColor){
            target.style.backgroundColor = randomColor();
        }
    }
    
})


function fresh(num = 16) {
    let allSquares = num * num;
    divs.style.width = `${Math.floor(960/num)}px`;
    divs.style.height = `${Math.floor(960/num)}px`;
    for (let i = 0; i < allSquares; i++) {
        container.appendChild(divs.cloneNode(true));
    }
}


fresh();