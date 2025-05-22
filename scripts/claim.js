const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const { proofs, airdropList } = JSON.parse(fs.readFileSync("merkle.json"));
  const address = airdropList[0]; // take first address

  const [signer] = await hre.ethers.getSigners();

  const contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const MerkleAirdrop = await hre.ethers.getContractFactory("MerkleAirdrop");
  const contract = await MerkleAirdrop.attach(contractAddress);

  const proof = proofs[address];
  console.log(`Claiming airdrop for: ${signer.address}`);
  const tx = await contract.claim(proof);
  await tx.wait();

  console.log("✅ Airdrop claimed successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
