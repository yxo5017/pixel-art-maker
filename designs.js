// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var submitBtn = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');


submitBtn.addEventListener('submit', function(event) {
  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('#inputWidth').value;
  const pixelColor = document.querySelector('#colorPicker').value;
  for (let i = 1; i <= width; i++) {
    const pixelTd = document.createElement('tr');
    pixelTd.style.background = pixelColor;
    canvas.appendChild(pixelTd);
    for (let j = 1; j <= height; j++) {
      const pixelTr = document.createElement('td');
      pixelTr.style.background = pixelColor;
      pixelTr.textContent = "";
      pixelTd.appendChild(pixelTr);
    }
    event.preventDefault();
  }
}, false);

// document.addEventListener('click', function() {
//   alert('You clicked');
// })

const mainHeading = document.querySelector('td');

mainHeading.addEventListener('click', function () {
  alert('The heading was clicked!');
  const pixelColor = document.querySelector('#colorPicker').value;
  mainHeading.style.backgroundColor = pixelColor;
});

// const height = document.querySelector('#inputHeight').value;
// const width = document.querySelector('#inputWidth').value;
// const mainHeading = document.querySelector('#pixelCanvas');
// const excitedText = document.createElement('td');
// const excitedText2 = document.createElement('td');
// excitedText.textContent = height + width + "aa";
// mainHeading.appendChild(excitedText);
// mainHeading.appendChild(excitedText);
