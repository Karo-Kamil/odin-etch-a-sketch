container = document.querySelector(".container");
divs = document.createElement("div");
divs.classList.add("border");


function fresh(num = 16) {
    let allSquares = num * num;
    divs.style.width = `${960/num}px`;
    divs.style.height = `${960/num}px`;
    for (let i = 0; i < allSquares; i++) {
        container.appendChild(divs.cloneNode(true));
    }
}
fresh();