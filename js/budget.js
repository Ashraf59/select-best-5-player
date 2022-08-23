//Player Expenses

document.getElementById('calculation').addEventListener('click', function(){

    const numberOfPlayer = document.getElementById('orderList');
    const playerInnerText = numberOfPlayer.innerText;
    const playerTextSplit = playerInnerText.split(/\n/);
    const selectedPlayer = playerTextSplit.length;
    const perPlayerCost = getInputFieldValueById('playerCost');

    const playerSalary = selectedPlayer * perPlayerCost
    
    const playerExpenseText = document.getElementById('player-expense-text');
    playerExpenseText.innerText = playerSalary;

})

//Total Expenses

document.getElementById('total-calculation').addEventListener('click', function(){ 

    const managerSalary = getInputFieldValueById('manager-salary');
    const coachSalary = getInputFieldValueById('coach-salary');
    const previousSalaryTotal = getTextElementValueById('player-expense-text');

    const totalBudget = previousSalaryTotal + managerSalary + coachSalary;

    const finalBudget = document.getElementById('total');
    finalBudget.innerText = totalBudget;
})


