const playerList = [];
// Best Player List

function selectedPlayer(){
    
    const orderItem = document.getElementById('orderList');
    orderItem.innerHTML = "";

    for(let i = 1; i < playerList.length; i++)
    {
        const name = playerList[i].playerName;

        const ol = document.createElement("li");
        ol.innerHTML = `
        <ol>${name}</ol>
        `;
        orderItem.appendChild(ol);
    }

}

function bestPlayer(element) {

const playerName = element.parentNode.parentNode.children[0].innerText;

const playerObj = {
    playerName: playerName
}
playerList.push(playerObj);

selectedPlayer(playerList);
}