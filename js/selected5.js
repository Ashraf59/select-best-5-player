const playerList = [];
// Best Player List

function selectedPlayer(){
    
    const orderItem = document.getElementById('orderList');
    orderItem.innerHTML = "";

    for(let i = 0; i < playerList.length; i++){

    if(playerList.length < 6){

        const name = playerList[i].playerName;

        const ol = document.createElement("li");
        ol.innerHTML = `
        <ol>${name}</ol>
        `;
        orderItem.appendChild(ol);  
    }
 
    else{
        alert('You cannot add player more than 5');
       return;
    }
    
}
        
}
    
function bestPlayer(element) {
element.disabled = true;
const playerName = element.parentNode.parentNode.children[0].innerText;

const playerObj = {
    playerName: playerName
}
playerList.push(playerObj);

selectedPlayer(playerList);

}
