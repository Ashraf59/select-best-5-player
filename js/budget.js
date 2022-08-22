document.getElementById('calculation').addEventListener('click', function(){
    const perPlayerCost = document.getElementById('playerCost');
    const perPlayerCostString = perPlayerCost.value;
    const previousPlayerCost = parseFloat(perPlayerCostString);

    const numberOfPlayer = document.getElementById('orderList');
    const numberOfPlayerString = numberOfPlayer.innerText;
    const selectedPlayer = parseFloat(numberOfPlayerString);

    const newPlayer = selectedPlayer * previousPlayerCost;
    numberOfPlayer.innerText = newPlayer;

})