// board
let board;
let boardWidth = 800;
let boardHeight = 500;
let context;

// player
let playerWidth = 50;
let playerHeight = 50;
let playerVelocityX = 0;
let playerVelocityY = 0;
let playerImg;

//buttons
let startButton;
let exitButton;

// player properties
let player = {
    x : boardWidth/2,
    y : boardHeight/2 - playerHeight/2,
    width : playerWidth,
    height : playerHeight,
    velocityX : playerVelocityX,
    velocityY : playerVelocityY
}

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); // used for drawing on the board

    // draw player
    playerImg = new Image();
    playerImg.src = "./img/juni-0002.png";
    playerImg.onload = function(){
        context.drawImage(playerImg, player.x, player.y, player.width, player.height);
    };
    
    requestAnimationFrame(update);

    // get DOM elements
    startButton = document.getElementById("start-button");
    // enable player controls
    startButton.addEventListener("click", startGame);
    document.addEventListener("keyup", movePlayer);
    
}

function update(){
    // start game loop
    animateGame = requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    // player
    context.drawImage(
    // check if player is within bounds
    let nextPlayerY = player.y + player.velocityY;
    if(!outOfBounds(nextPlayerY)){
        player.y = nextPlayerY;
    }
    context.drawImage(playerImg, player.x, player.y, player.width, player.height);
}

function startGame(){

}

function movePlayer(e){
    if(e.code == "ArrowUp"){
        player.velocityY = -1;
    }
    else if(e.code == "ArrowDown"){
        player.velocityY == 1;
    }
    else if(e.code == "ArrowLeft"){
        player.velocityX == -1;
    }
    else if(e.code == "ArrowRight"){
        player.velocityX == 1;
    }
}

function outOfBounds(position){
    return (position < 0 || position + playerHeight > boardHeight ||
        position + playerWidth > boardWidth);
}

function detectCollision(a, b){
    return a.x < b.x + b.width && // a's top left corner doesn't reach b's top right corner
        a.x + a.width > b.x && // a's top right corner passes b's top left corner
        a.y < b.y + b.height && //a's top left corner doens't reach b's bottom left corner
        a.y + a.height > b.y; // a's bottom left corner passes b's top left corner
}
