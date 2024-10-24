// loading drawing grid with size
function loadingGrid(size) {
   const drawingGrid = document.querySelector('#drawing-grid')
   drawingGrid.style .gridTemplateColumns = `repeat(${size}, 1fr)`
   drawingGrid.style .gridTemplateRows = `repeat(${size}, 1fr)`
}


loadingGrid(8)