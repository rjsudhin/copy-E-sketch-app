loadingGrid(8)

// loading drawing grid with size
function loadingGrid(size) {
   const drawingGrid = document.querySelector('#drawing-grid')
   drawingGrid.style .gridTemplateColumns = `repeat(${size}, 1fr)`
   drawingGrid.style .gridTemplateRows = `repeat(${size}, 1fr)`

   // creating of box in given size
   const amountOfSize = size * size
   for (let i = 0; i < amountOfSize; i += 1) {
      let div = document.createElement('div')
      div.classList.add('box')
      // drawing event
      div.addEventListener('mousemove', drawingGridBox)
      drawingGrid.appendChild(div)
   }
}

// drawing in the grid when the event occurs
function drawingGridBox(e) {
   e.target.style.backgroundColor = '#252525'
}

