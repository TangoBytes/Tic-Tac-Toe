const board = (() => {
    const gridSections = document.getElementsByClassName("grid");
    const board = document.getElementById("board");
    board.addEventListener("click", function (e) {
        handleGridClick(e.target);
    });

    const handleGridClick = (e) => {
        console.log(`Clicked ${e.id}`);
        if (gameplay.gameStage.started) {
            console.log("MARKING");
            gameplay.markGrid(e);
        }
    };

    actionButton = document.getElementById("action-button");
    actionButton.addEventListener("click", function (e) {
        handleActionButtonClick(e.target);
    });

    const handleActionButtonClick = (e) => {
        if (e.textContent.toLowerCase() === "start") {
            console.log("Starting Game...");
            e.textContent = "Reset";
        } else if (e.textContent.toLowerCase() === "reset") {
            console.log("Resetting Game...");
        }
        Object.keys(gridSections).forEach((gridIndex) => {
            gridSections[gridIndex].textContent = "";
            gameplay.gameStage.started = true;
        });
    };
    return { gridSections, handleGridClick, handleActionButtonClick };
})();

const gameplay = (() => {
    const gameStage = {
        started: false,
        playerWon: false,
        computerWon: false,
        ended: false,
    };
    const turn = {
        playerTurn: false,
        computerTurn: false,
        shape: "",
    };
    const markGrid = (selectedGrid) => {
        if (selectedGrid.textContent == "") {
            selectedGrid.textContent = gameplay.turn.shape;
        } else {
            alert("That area is already taken. Please try again...");
        }
    };
    return { gameStage, turn, markGrid };
})();

gameplay.turn.shape = "X";
