loadingGrid(8)

const sizePopBtn = document.querySelector('.select-size-popup-btn')


// getting user input for the grid box size
sizePopBtn.addEventListener('mousedown', ()=> {
   const userInput = gettingUserInput()
   // setup the grid with new user's size
   loadingGrid(userInput)
})


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


// getting the size from the user input when the size btn clicks
function gettingUserInput() {
   let sizeResult = false
   while (sizeResult === false) {
      let userInput = prompt('Enter a size please')
      if (!userInput == '' || !userInput == null) {
         if (userInput > 0 && userInput < 101) {
            console.log(`user entered '${userInput}'`)
            sizeResult = true
            return userInput
         } else {
            console.log(`It's not a number or not in range`)
         }
      } else {
         console.log('enter some values please')
      }
   }
}