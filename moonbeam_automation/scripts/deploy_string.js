const fs = require('fs');
const hre = require('hardhat');

async function main() {
    const StringStore = await ethers.getContractFactory('StringStore');
    console.log('Deploying StringStore...');

    const stringStore = await StringStore.deploy();
    await stringStore.deployed();

    console.log('StringStore deployed to:', stringStore.address);
    console.log(`Transaction Hash: https://moonbase.subscan.io/extrinsic/${stringStore.deployTransaction.hash}`);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });