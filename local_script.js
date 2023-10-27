const web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/b7e19a37438a4999a009f0322f5442ba"));

document.addEventListener("DOMContentLoaded", function() {
    // Get the latest block number
    web3.eth.getBlockNumber()
        .then(function(blockNumber) {
            // Display the latest block number on the web page
            document.getElementById("latest-block").textContent = `Latest Ethereum Block: ${blockNumber}`;
        })
        .catch(function(error) {
            console.error("Error fetching the latest block:", error);
        });

    function populateTransactionList(transactions) {
        const transactionList = document.getElementById("transaction-list");

        transactions.forEach((tx) => {
            const li = document.createElement("li");
            li.textContent = `Transaction Hash: ${tx.hash}, From: ${tx.from}, To: ${tx.to}, Value (ETH): ${web3.utils.fromWei(tx.value, 'ether')}`;
            transactionList.appendChild(li);
        });
    }

    // Function to fetch recent transactions
    function getRecentTransactions() {
        web3.eth.getBlock("latest", true)  // Fetch the latest block with transactions
            .then(function(block) {
                if (block && block.transactions.length > 0) {
                    populateTransactionList(block.transactions);
                }
            })
            .catch(function(error) {
                console.error("Error fetching recent transactions:", error);
            });
    }

    // Call the function to get recent transactions
    getRecentTransactions();
});
