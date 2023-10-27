const Web3 = require('web3');

let web3 = new Web3(Web3.givenProvider || "wss://mainnet.infura.io/ws/v3/b7e19a37438a4999a009f0322f5442ba");


function populateTransactionList(transactions) {
    transactions.forEach((tx) => {
        console.log(`Transaction Hash: ${tx.hash}, From: ${tx.from}, To: ${tx.to}, Value (ETH): ${web3.utils.fromWei(tx.value, 'ether')}`);
    });
}

async function getLatestBlockAndTransactions() {
    try {
        // Get the latest block number
        const blockNumber = await web3.eth.getBlockNumber();
        console.log(`Latest Ethereum Block: ${blockNumber}`);

        // Fetch the latest block with transactions
        const block = await web3.eth.getBlock('latest', true);
        if (block && block.transactions.length > 0) {
            console.log('Recent Transactions:');
            populateTransactionList(block.transactions);
        } else {
            console.log('No transactions found in the latest block.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to get the latest block number and recent transactions
getLatestBlockAndTransactions();
