document.getElementById('btn-player1').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name1', 'btn-player1')


});
document.getElementById('btn-player2').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name2', 'btn-player2')

});
document.getElementById('btn-player3').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name3', 'btn-player3')

});
document.getElementById('btn-player4').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name4', 'btn-player4')

});
document.getElementById('btn-player5').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name5', 'btn-player5')

});
document.getElementById('btn-player6').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name6', 'btn-player6')

});
document.getElementById('btn-player7').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name7', 'btn-player7')

});
document.getElementById('btn-player8').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name8', 'btn-player8')

});
document.getElementById('btn-player9').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name9', 'btn-player9')

});
document.getElementById('btn-player10').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name10', 'btn-player10')

});
document.getElementById('btn-player11').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name11', 'btn-player11')

});
document.getElementById('btn-player12').addEventListener('click', function () {
    setPlayerNameById('selected-players', 'player-name12', 'btn-player12')

});

function setPlayerNameById(selectedPlayer, playerName, btn) {
    const ol = document.getElementById(selectedPlayer)
    const li = document.createElement("li");
    const playerNameElement = document.getElementById(playerName);
    li.innerText = playerNameElement.innerText;
    ol.appendChild(li);
    console.log(ol)
    document.getElementById(btn).disabled = true;
    document.getElementById(btn).style.backgroundColor = '#A2A9AF';

};