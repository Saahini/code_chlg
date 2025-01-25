let token = {
    name: "MyToken",
    totalSupply: 1000,
    balances: {
        'treasury': 1000,
        'recipient': 0
    }
};

function updateBalances() {
    document.getElementById("treasury-balance").innerText = token.balances.treasury;
    document.getElementById("recipient-balance").innerText = token.balances.recipient;
}

function transferTokens() {
    const amount = 50;
    if (token.balances.treasury >= amount) {
        token.balances.treasury -= amount;
        token.balances.recipient += amount;
        updateBalances();
        alert("Transferred 50 tokens to recipient.");
    } else {
        alert("Insufficient treasury balance.");
    }
}

function mintTokens() {
    const amount = 100;
    token.totalSupply += amount;
    token.balances.recipient += amount;
    updateBalances();
    alert("Minted 100 tokens to recipient.");
}

document.addEventListener("DOMContentLoaded", updateBalances);
