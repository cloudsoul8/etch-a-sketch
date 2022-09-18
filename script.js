const pixelContainer = document.querySelector("#pixel-container")
let colors = ['#ff0000', '#FF4433', '#FFA500', '#FFAE42', '#FFFF00', '#00FF00', '#32CD32', '#088F8F', '#0000ff', '#4B0082', '#8F00FF', '#fff', '#aaa', '#555', '#000']
let currentColor = "black"
initializePixels(16,16)
initializeColorPicker()

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
    if (e.buttons == 1)
        this.style.backgroundColor = currentColor
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

function initializeColorPicker() {
    const colorContainer = document.querySelector("#color-container")

    colors.forEach(hex => {
        const color = document.createElement("div")
        color.style.backgroundColor = `${hex}`
        color.style.width = '32px'
        color.style.height = '32px'
        color.addEventListener('click', changeCurrentColor)
        colorContainer.appendChild(color)
    })
    
}

function changeCurrentColor(e) {
    currentColor = this.style.backgroundColor
}