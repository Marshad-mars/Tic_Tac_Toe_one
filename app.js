// The main logic and the function of the whole game.

let boxes = document.querySelectorAll(".boxes");
let reset_btn = document.querySelector("#reset_game_button");

let turnO = true;  //This variable would be used for turn checking. If the turn is X then this would be false for the alternate turning.
const win_patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("clcik", () => {
        console.log("Hello world and the box was clicked");
        console.log("Hello world and now it is working and fine!");
    });
});