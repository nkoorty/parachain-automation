/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');

const { privateKey } = require('./generated.json');

module.exports = {
  solidity: '0.8.1',
  networks: {
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287,
      accounts: [privateKey]
    }
  }
};