require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom kitten bone tooth finger deliver remember method inner cricket tackle seat'; 
let testAccounts = [
"0x5c85b55fb782b97968bf20b9e833eb0dee7100470e6bbf1a56081b3869536018",
"0x9c32829060d7a8a29a9e58c46e17e30c773197b72137c929be637023fd9f4b08",
"0xf61924611ee2a3290d4ab9835b0c9224093ec36a6bd50c7d96a3178c46bb8101",
"0xdc3a43537531940f4419e99d7e7b529c896cd403aea65cddc315d41cfa6f2deb",
"0x12312667be3c10788feab65f77dc3d51bfdc545cb859679aff611ddb59ec9d43",
"0xf5043401d6baac298d6bad821eca8295b8472b37fec1d96aef1df5bda219085e",
"0x8a1bfb9efbe9b42878d4229a2762d113e92b37550b26d41c65b73464d578a24b",
"0x0f7bb7d884758c85841719cb6ab07c08784df836f83e0826666be125f8a78db3",
"0xff7fb9c5a67db90888d8ff42f587fbdd95c95dd4dec5f949281bd25dd82ebc5d",
"0xc885df3c7199c192d29c358a492be9b4aa2ff6fa7be7b9f6ab977cb7f28eb718"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


