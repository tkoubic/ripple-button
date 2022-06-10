const rButton = document.querySelector(".btn-ripple");

function followTheMouse(event, element) {
    let positionX = event.offsetX;
    let possitionY = event.offsetY;
    element.style.setProperty('--x', positionX + "px");
    element.style.setProperty('--y', possitionY + "px");

}
rButton.addEventListener('click', (event)=> {
    
    rButton.classList.add("pulsing");
    followTheMouse(event, rButton);
    rButton.addEventListener('animationend', ()=>{
        rButton.classList.remove("pulsing");
    }),{once:true}
});