# ZK Merkle Airdrop

This repository provides a complete guide to deploying and interacting with a Merkle Airdrop smart contract using Hardhat. It includes:

- Generating a Merkle tree
- Deploying the airdrop contract
- Claiming tokens using Merkle proofs

---

## 📦 Prerequisites

Make sure your VPS or environment has:

- **Node.js v18+**
- **Git**
- **npm**
- **Hardhat**

Install everything (run this in terminal):

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install curl git build-essential -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
npm install -g hardhat
