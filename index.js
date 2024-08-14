document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const newGridBtn = document.getElementById("new-grid");
  const eraserBtn = document.getElementById("eraser");

  // Function to create the grid
  function createGrid(squaresPerSide) {
    container.innerHTML = ""; // Clear any existing squares
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);

      // Add hover effect to change color
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomRainbowColor();
      });
    }
  }

  // Function to generate a random rainbow color
  function getRandomRainbowColor() {
    const colors = [
      "#FF0000",
      "#FF7F00",
      "#FFFF00",
      "#00FF00",
      "#0000FF",
      "#4B0082",
      "#9400D3",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Event listener for the New Grid button
  newGridBtn.addEventListener("click", () => {
    let squaresPerSide = parseInt(
      prompt("Enter the number of squares per side (max 100):"),
      10
    );
    if (squaresPerSide > 100) squaresPerSide = 100;
    if (squaresPerSide < 1 || isNaN(squaresPerSide)) return;
    createGrid(squaresPerSide);
  });

  // Event listener for the Eraser button
  eraserBtn.addEventListener("click", () => {
    const squares = container.querySelectorAll(".square");
    squares.forEach((square) => (square.style.backgroundColor = "#fff"));
  });

  // Initialize the grid with a 16x16 setup
  createGrid(16); // Start with a 16x16 grid
});
