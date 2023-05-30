const refresh = document.querySelector("button");
const colorName = document.querySelector("h2");
const isCorrect = document.querySelector(".is-correct");
const boxColors = document.querySelectorAll(".f");
const headerColor = document.querySelector(".header")
let colors = [];
function colorsSelection() {
  for (let i = 0; i < boxColors.length; i++) {
    colors.push(

    /// we can you rgb too
    //   `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    //     Math.random() * 255
    //   )},${Math.floor(Math.random() * 255)}`

    `#${Math.floor(Math.random() * 16777215).toString(16)}`
   
    );
  }
}
colorsSelection();
//////////////////////////////////////////////
function applyColors(){
    colors.forEach((color,index) =>{
boxColors[index].style.background = color;
boxColors[index].setAttribute("data-color",color)
    })
}
applyColors()
/////////////////////////////////////
function randomPickColor(){
    const randomColor = colors[Math.floor(Math.random()*colors.length)]
    colorName.textContent = randomColor;
    return randomColor
}
let chosedColor = randomPickColor();
///////////////////////////////////////
function checkColor(){
    boxColors.forEach(boxColors =>{
        boxColors.addEventListener("click",e=>{
        if(e.target.dataset.color === chosedColor){
            isCorrect.textContent = "you win"
            headerColor.style.background = chosedColor;
        }
        else{
            isCorrect.textContent = "false"
            e.target.classList.add("hide")
        }

        })
    })
}
checkColor()



//writed by Suliman Hakimi