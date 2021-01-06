var player = 1;
var player1Score = 0;
var player1Moves = [];
var player2Score = 0;
var player2Moves = [];
var turns = 0;
var megaContainer = document.getElementById("megaContainer");

function checaSomas(i, array){
    var soma = 0;
    for(var j = 0; j < array.length; j++){
        if(i != j){
            soma += array[j];
        }
    }
    return soma;
}

function resetGame(){
    player = 1;
    player1Score = 0;
    player1Moves = [];
    player2Score = 0;
    player2Moves = [];
    turns = 0;
    for(var i = 1; i < 10; i++){
        var cell = document.getElementById("cell" + i);
        cell.removeAttribute("disabled");
        cell.textContent = "";
    }
    var endButton = document.getElementById("endButton");
    endButton.remove();
}

function pressCell(number){
    var cell = document.getElementById("cell" + number);
    cell.setAttribute("disabled", "");
    if(player == 1){
        cell.textContent = "X";
        player1Score += number;
        player1Moves.push(number);
    }
    else{
        cell.textContent = "O";
        player2Score += number;
        player2Moves.push(number);
    }
    turns += 1;
    checkWinner();
    player *= -1;
}

function checkWinner(){
    if(turns == 5 || turns == 6){
        if(player1Score == 15){
            createEndButton(1);
        }
        else if(player2Score == 15){
            createEndButton(2);
        }
    }
    else if(turns == 7 || turns == 8){
        for(var i = 0; i < 4; i++){
            if(checaSomas(i, player1Moves) == 15){
                createEndButton(1);
            }
            else if(checaSomas(i, player2Moves) == 15){
                createEndButton(2);
            }
        }
    }
}

function createEndButton(number){
    var endButton = document.createElement("button");
    endButton.setAttribute("id", "endButton");
    endButton.setAttribute("onclick", "resetGame()");
    endButton.textContent = "Congrats player " + number + "! Click me to reset!";
    megaContainer.append(endButton);
}