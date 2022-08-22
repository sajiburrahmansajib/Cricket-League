function setPlayerNameById(selectedPlayer, playerName, btn) {
    const ol = document.getElementById(selectedPlayer)
    const li = document.createElement("li");
    const playerNameElement = document.getElementById(playerName);
    li.innerText = playerNameElement.innerText;
    ol.appendChild(li);
    document.getElementById(btn).disabled = true;
    document.getElementById(btn).style.backgroundColor = '#A2A9AF';

};
function getInputElementById(price) {
    const inputElement = document.getElementById(price);
    const inputElementString = inputElement.value;
    const inputElementInt = parseInt(inputElementString);
    console.log(inputElementInt);

    if (isNaN(inputElementInt) == true) {
        alert('You can only put number');
        return 0;
    }
    else {
        return inputElementInt;
    }
};
function getExpensesTotal(expenses) {
    const expenceElement = document.getElementById(expenses);
    const expenceElementString = expenceElement.innerText;
    const expenceElementInt = parseInt(expenceElementString);
    return expenceElementInt;
};
function playerNumberCheck() {
    let countPlayer = document.getElementById("selected-players").children.length;
    return countPlayer;
};