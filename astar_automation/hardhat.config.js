require("@nomicfoundation/hardhat-toolbox");

const { privateKey } = require('./generated.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    shibuya: {
      url: "https://evm.shibuya.astar.network",
      chainId: 81,
      accounts: [ privateKey ]
    },
  }
};
