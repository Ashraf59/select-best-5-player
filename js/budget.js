
//Calculate Player Expense

document.getElementById('calculation').addEventListener('click', function(){

    //Per player cost

    const perPlayerCost = document.getElementById('playerCost');
    const perPlayerCostString = perPlayerCost.value;
    const previousPlayerCost = parseFloat(perPlayerCostString);

    //Convert Seleted number player string to number

    const numberOfPlayer = document.getElementById('orderList');
    const playerInnerText = numberOfPlayer.innerText;
    const playerTextSplit = playerInnerText.split(/\n/);
    const selectedPlayer = playerTextSplit.length;

    //Slected player total expense

    const playerExpenseText = document.getElementById('player-expense-text');
    const playerExpenseTextString = playerExpenseText.innerText;
    const previousExpenseText = parseFloat(playerExpenseTextString);

    const playerSalary = selectedPlayer * previousPlayerCost;
    playerExpenseText.innerText = playerSalary;

})


// Calculate total expenses



document.getElementById('total-calculation').addEventListener('click', function(){

    
    //Per player cost

    const perPlayerCost = document.getElementById('playerCost');
    const perPlayerCostString = perPlayerCost.value;
    const previousPlayerCost = parseFloat(perPlayerCostString);

    //Convert Seleted number player string to number

    const numberOfPlayer = document.getElementById('orderList');
    const playerInnerText = numberOfPlayer.innerText;
    const playerTextSplit = playerInnerText.split(/\n/);
    const selectedPlayer = playerTextSplit.length;



     //Slected player total expense

     const playerExpenseText = document.getElementById('player-expense-text');
     const playerExpenseTextString = playerExpenseText.innerText;
     const previousExpenseText = parseFloat(playerExpenseTextString);
     const playerSalary = selectedPlayer * previousPlayerCost;
     playerExpenseText.innerText = playerSalary;

    //Manager Salary

    const managerSalaryField = document.getElementById('manager-salary');
    const managerSalaryFieldString = managerSalaryField.value;
    const managerSalary = parseFloat(managerSalaryFieldString);

    
    

    //Coach Salary

    const coachSalaryField = document.getElementById('coach-salary');
    const coachSalaryFieldString = coachSalaryField.value;
    const coachSalary = parseFloat(coachSalaryFieldString);

    //Calculation of total expense

    const totalExpenseText = document.getElementById('total');
    const totalExpenseFieldString = totalExpenseText.innerText;
    const totalExpense = parseFloat(totalExpenseFieldString);

    const totalBudget = playerSalary + managerSalary + coachSalary;
    totalExpenseText.innerText = totalBudget;

   

})



