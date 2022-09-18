const pixelContainer = document.querySelector("#pixel-container")
initializePixels(16,16)
function initializePixels(sideCount) {
    for (let i = 0; i < sideCount*sideCount; i++) {
        const pixel = document.createElement("div")
        pixel.className = "pixel"
        pixelContainer.appendChild(pixel)
    }

    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', changePixel)
})
}




function changePixel(e) {
    this.classList.add("changed")
}

function changeDimension() {
    let sideCount = prompt("Enter pixel count per side.")

    while (true) {
        if (sideCount > 100 || sideCount < 16) {
            sideCount = prompt("Number must be between 16 and 100.\nEnter pixel count per side.")
        }
        else break;
    }

    pixelContainer.innerHTML = ''
    pixelContainer.style.gridTemplateColumns = `repeat(${+(sideCount)},1fr)`
    initializePixels(sideCount)
    

}