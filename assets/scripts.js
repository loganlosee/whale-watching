const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/b7e19a37438a4999a009f0322f5442ba"));

document.addEventListener("DOMContentLoaded", function() {
    // Get the latest block number
    web3.eth.getBlockNumber()
        .then(function(blockNumber) {
            // Display the latest block numberon web page
            document.getElementById("latest-block").textContent = `Latest Ethereum Block: ${blockNumber}`;
        })
        .catch(function(error) {
            console.error("Error fetching the latest block:", error);
        });
});
