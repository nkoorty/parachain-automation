# Moonbeam Smart Contract Automation
The following functions are automated:
1. RPC-Connection to private wallet with sufficient Funds
2. ETH Wallet generation for smart contract deployment
3. Transaction from private to generated wallet
4. Deployment of smart contract to Moonbase Alpha (Moonbeam Testnet)
## Set-Up
To connect your private wallet to this tool, run the following 

    cp private.json.tmp private.json

and enter your private key into the provided `private.json` file. From the `/moonbeam_automation` directory, run the following to automate the wallet generation and smart contract deployment process for the NFT.sol file

    node nft_deployment.js

and for the String.sol smart contract

    node string_deployment.js

After 30-60 seconds, you should receive a link to to the Moonbase Alpha block explorer, outlining the details of your transaction.
