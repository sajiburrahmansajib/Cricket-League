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
document.getElementById('btn-calculation').addEventListener('click', function () {
    const perPayerCost = getInputElementById('playerCost');
    // const liCouunt = document.getElementById('selected-players');
    let countPlayer = document.getElementById("selected-players").children.length;
    const expenceElement = document.getElementById('p-Expenses');
    const totalExpenses = perPayerCost * countPlayer;
    console.log(typeof totalExpenses, totalExpenses)
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

function getInputElementById(price) {
    const inputElement = document.getElementById(price);
    const inputElementString = inputElement.value;
    const inputElementInt = parseInt(inputElementString);
    console.log(inputElementInt);
    return inputElementInt;
};
function getExpensesTotal(expenses) {
    const expenceElement = document.getElementById(expenses);
    const expenceElementString = expenceElement.innerText;
    const expenceElementInt = parseInt(expenceElementString);
    return expenceElementInt;
};






