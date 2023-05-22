const fs = require('fs');
const hre = require('hardhat');

async function main() {
    const Box = await ethers.getContractFactory('Box');
    console.log('Deploying Box...');

    const box = await Box.deploy();
    await box.deployed();

    console.log('Box deployed to:', box.address);
    fs.writeFileSync('transactionHash.txt', box.deployTransaction.hash);
 }
 
 main()
    .then(() => process.exit(0))
    .catch((error) => {
       console.error(error);
       process.exit(1);
    });
