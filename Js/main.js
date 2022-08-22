function setPlayerNameById(selectedPlayer, playerName, btn) {
    const ol = document.getElementById(selectedPlayer)
    const li = document.createElement("li");
    const playerNameElement = document.getElementById(playerName);
    li.innerText = playerNameElement.innerText;
    ol.appendChild(li);
    document.getElementById(btn).disabled = true;
    document.getElementById(btn).style.backgroundColor = '#A2A9AF';

};