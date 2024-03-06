containerEle = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    var colorContainerEle = document.createElement("div");
    
    colorContainerEle.classList.add("color-container");
    const color = getRandomColor();
    colorContainerEle.innerHTML = color;
    colorContainerEle.style.backgroundColor = color ;

    containerEle.appendChild(colorContainerEle);
}

function getRandomColor() {
    const c = "0123456789abcdef" ;
    var colorCode = "#";
    for (var index = 0; index < 6; index++) {
          const i =  Math.floor(Math.random()*c.length);
          colorCode += c.substring(i,i+1);    
    }
    return colorCode;
}