const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const fs = require('fs');

// Sample list of airdrop addresses
const airdropList = [
  "0x1234567890abcdef1234567890abcdef12345678",
  "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
  "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
];

// Generate leaf nodes
const leaves = airdropList.map(addr => keccak256(addr));
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

// Write output to file
fs.writeFileSync("merkle.json", JSON.stringify({
  root,
  airdropList,
  proofs: airdropList.reduce((acc, addr) => {
    acc[addr] = tree.getHexProof(keccak256(addr));
    return acc;
  }, {})
}, null, 2));

console.log("Merkle root:", root);
