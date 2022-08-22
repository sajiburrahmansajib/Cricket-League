document.getElementById('btn-player1').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name1', 'btn-player1')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player2').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name2', 'btn-player2')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player3').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name3', 'btn-player3')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player4').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name4', 'btn-player4')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player5').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name5', 'btn-player5')
    }
    else {
        alert("You can Choose Only Five Players ");
    }

});
document.getElementById('btn-player6').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name6', 'btn-player6')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player7').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name7', 'btn-player7')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player8').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name8', 'btn-player8')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player9').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name9', 'btn-player9')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player10').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name10', 'btn-player10')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player11').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name11', 'btn-player11')
    }
    else {
        alert("You can Choose Only Five Players ");
    }
});
document.getElementById('btn-player12').addEventListener('click', function () {
    const players = playerNumberCheck();
    if (players <= 4) {
        setPlayerNameById('selected-players', 'player-name12', 'btn-player12')
    }
    else {
        alert('You can Choose Only Five Players');
    }
});
document.getElementById('btn-calculation').addEventListener('click', function () {
    const perPlayerCost = getInputElementById('playerCost');
    // const liCouunt = document.getElementById('selected-players');
    let countPlayer = document.getElementById("selected-players").children.length;
    const expenceElement = document.getElementById('p-Expenses');
    const totalExpenses = perPlayerCost * countPlayer;
    console.log(typeof perPlayerCost, perPlayerCost)
    expenceElement.innerText = totalExpenses;


});

document.getElementById('btn-totalCalculation').addEventListener('click', function () {
    const managerPrice = getInputElementById('managerCost');
    const coachPrice = getInputElementById('coachCost');
    const totalExpenses = getExpensesTotal('p-Expenses');
    const total = managerPrice + coachPrice + totalExpenses;
    const totalElement = document.getElementById('total');
    totalElement.innerText = total;


});







