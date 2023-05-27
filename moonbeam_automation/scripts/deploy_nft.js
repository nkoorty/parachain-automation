const fs = require('fs');
const hre = require('hardhat');

async function main() {
    const MyToken = await ethers.getContractFactory('MyToken');
    console.log('Deploying ERC-20 Token...');

    const myToken = await MyToken.deploy();
    await myToken.deployed();

    console.log('ERC-20 Token deployed to:', myToken.address);
    console.log(`Transaction Hash: https://moonbase.subscan.io/extrinsic/${myToken.deployTransaction.hash}`);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });

