require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan remember night unusual grace credit equal ghost'; 
let testAccounts = [
"0x9f51407847f749b9b169fcbd0e6d9cd4269195b06f7ee9d3536933667fd6d0ad",
"0x7d4373610c9f96aaf176bc65673a7533280d387f41257155135f0ab11cbfe83a",
"0x77124158b8853881969d22063a9ff4dabe4ce4bc6d7956c2fdc7508f11d6f028",
"0xcc99fee4dd9483711cb697668f00c1c967685ad7a1b17386fdc731e60ee941b9",
"0x19ba268e2ef93c3751fb75e17827f216bceb3bf2f72dc69e75dfa162ee059cf7",
"0x86280496ae6db1d6a7c846bff01645ae82c38f5655b759cdcd50f145cf8aa28f",
"0xf853243af5ed84fb47dde2ccffdd6cf58e5e4066205f2655ac8e8b32f35b82c7",
"0x675708c9cd0d5d110309765ebc3c93bb32f167abaedbf03a447c0be7183af7b0",
"0xeacb021206bcd5eba7dbc946135bc27a3fc8531add9c4941f1cc36ac94584d01",
"0xec73f651dfb6e15ab9186c6d11ff4c82dd1ba4da604ab77475ae0d9a9f2a444a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

