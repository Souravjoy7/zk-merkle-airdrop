const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const { root } = JSON.parse(fs.readFileSync("merkle.json"));
  const MerkleAirdrop = await hre.ethers.getContractFactory("MerkleAirdrop");
  const contract = await MerkleAirdrop.deploy(root);

  await contract.waitForDeployment();

  console.log("MerkleAirdrop deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
