const rullsWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let is_player = 1;
const player_x = "X";
const player_o = "O";
//the player who will start
let currentPlayer = player_o;

let  State  = ['', '', '', '', '', '', '','', ''];
//here for the message show the show the player
const showWiner = () => `the ${currentPlayer} player won the game!`;
// const showWiner = `the ${currentPlayer} player won the game!`;
const showDraw =`the game is  tie!`;
function PlayerTurn(){ 
    return `It's ${currentPlayer} turn`;
}
//get the element
const ShowMessage = document.querySelector('h2');
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', getCell));
const restart = $('#restart');
const Light = $('#Light')
const Dark = $('#Dark')
//this for get the cell by event taeget and chick for the add in Srate array
function getCell(event) {

    const clickedCell = event.target;

    const clickeDaraCell = parseInt(
      clickedCell.getAttribute('data-cell')
    );

    if ( State[clickeDaraCell] !== "" || !is_player) {
        return;
    };

   cellPlayed(clickedCell, clickeDaraCell);
    gameResult();
}
//this function for the player turn
function changPlayer() {
    //chang player 
    if (currentPlayer === player_o) {
        currentPlayer = player_x;
    } else {
        currentPlayer = player_o;
    }
    ShowMessage.innerText = PlayerTurn();
};
//this for player input 
function cellPlayed(clickedCell, clickeDaraCell) {

     State [clickeDaraCell] = currentPlayer;
     //this take the input
    clickedCell.innerText = currentPlayer;
}
//this function for the game result and chick
function gameResult() {
    let playerWon = 0;
    let i = 0;
    for (;i <= 7;) {
        let regWin =rullsWin[i];
        let first =  State [regWin[0]];
        let second =  State [regWin[1]];
        let third =  State [regWin[2]];
             i++;
        if ( first== '' || second  == '' || third == '') {
            continue;
        };
        if ( first == second  && second  == third) {
           playerWon = 1;
            break
        } };
if  (playerWon) {
        ShowMessage.innerText = showWiner();
        is_player = 0;
        return;
    };
    let playerDraw = ! State .includes("");
 if (playerDraw) {
        ShowMessage.innerText =showDraw;
        is_player = 0;
        return;
    };
    changPlayer();
};

//to restart the game
  restart.click(function() {
      location.reload();
  });
  //this function for the bacground screen
  function light(){
      $("#cont").css({"background-color":"white"});
      $("h1").css("color","black");
      $('h2').css("color","black");
  };
  Light.on('click', light)
//this function for the bacground screen
  function dark(){
      $("#cont").css({"background-color":"black"});
      $("h1").css("color","white");
      $('h2').css("color","white");
      
  };
  Dark.on('click', dark);
  