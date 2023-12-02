import * as Web3 from '@solana/web3.js';


async function main() {
    const publickey = new Web3.PublicKey('4B8kbdgbn7evMWnZ91ifX13ZQcbHAjPaiyrwK1eywcuE');

    const url = Web3.clusterApiUrl('devnet');
    const connection = new Web3.Connection(url);

    const balance = await connection.getBalance(publickey);

    console.log(balance);
}

main();