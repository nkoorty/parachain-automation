# Astar Smart Contract Automation
The following functions are automated:
1. RPC-Connection to private wallet with sufficient Funds
2. ETH Wallet generation for smart contract deployment
3. Transaction from private to generated wallet
4. Deployment of smart contract to Shibuya (Astar Testnet)
## Set-Up
To connect your private wallet to this tool, run the following 

    cp private.json.tmp private.json

and enter your private key into the provided `private.json` file. From the `/astar_automation` directory, run the following to automate the wallet generation and smart contract deployment process

    node wallet.js

After 30-60 seconds, you should receive a link to to the Shibuya block explorer, outlining the details of your transaction.
