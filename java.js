    const grid = document.querySelector("div");
    const button = document.querySelector("button");

    function createSquares (x) {
        for (let i = 0; i < x * x; i++){
            const square = document.createElement("div");
            square.classList.add("cell");
            const size = 100 / x;
            square.style.width = size + "%";
            square.style.height = size + "%";
            square.style.backgroundColor = randomColor();
            hoverSquares(square);
            grid.appendChild(square);
        } 
    } (createSquares(16));

    function hoverSquares (square){
        square.addEventListener(
        "mouseover", (e) => {
        e.target.style.backgroundColor = "gray";
    });
        square.addEventListener(
        "mouseout", (e) => {
        e.target.style.backgroundColor = randomColor();
    });
    }

    function getInput () {
        const input = prompt("Give a number between 1 and 100 to create a new grid");
        if(!input || isNaN(Number(input)) || input > 100 || input < 1) { 
            return null; 
        } return Number(input);
    }
    
    
    function changeGrid () {
        const size = getInput();
        if (!size) return;

        grid.innerHTML = "";
        createSquares(size);
    }
    button.addEventListener("click", changeGrid);

    function randomColor () {
        let symbols = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++){
            color += symbols[Math.floor(Math.random() * 16)];
        }
        return color;
    }
