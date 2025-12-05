SolCipher Kiro is a privacy-first decentralized application (dApp) for secure, end-to-end encrypted file sharing. Built on Hedera Hashgraph for low-cost transactions, IPFS for decentralized storage, and Kiro (formerly KILT Protocol) for decentralized identities (DIDs) and revocable verifiable credentials (VCs). This setup ensures users have full control over access, with instant revocation and zero-knowledge proofs for privacy.

### Key Features
- **Client-Side Encryption**: Files are encrypted with AES-256-GCM using the Web Crypto API and Argon2 for key derivation—keys never leave your device.
- **Decentralized Storage**: Encrypted files are uploaded to IPFS via Web3.Storage for permanent, tamper-proof storage.
- **Identity & Access Control**: Uses Kiro's DIDs and VCs for granting/revoking access. Recipients must present a valid VC (checked on-chain) to decrypt. Supports zero-knowledge proofs (e.g., prove "you're a licensed lawyer" without revealing identity).
- **Optional On-Chain Logging**: Hedera Consensus Service (HCS) for immutable logs of share/revoke events.
- **Wallet Integration**: Connect with HashPack or Blade wallets for Hedera accounts.
- **Revocation**: Instant on-chain revocation via Kiro's attestation registry—no central server needed.
- **Use Cases**: Secure sharing of legal documents, medical records, NDAs, or any sensitive data.

### Tech Stack
- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Identity**: @kiltprotocol/sdk-js (Kiro/KILT)
- **Blockchain**: Hedera SDK, Ethers.js for optional smart contracts
- **Storage**: Web3.Storage (IPFS)
- **Encryption**: Web Crypto API, PBKDF2 (Argon2-like derivation)
- **Contracts**: Solidity 0.8.24, Hardhat for deployment
- **Other**: Vercel for hosting

### Installation & Setup
1. Clone the repo:
   ```
   git clone https://github.com/yourusername/SolCipher_Kiro.git
   cd SolCipher_Kiro
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Copy and fill `.env`:
   ```
   cp .env.example .env
   ```
   - `NEXT_PUBLIC_KIRO_RPC`: Kiro RPC URL (e.g., https://rpc.kilt.io)
   - `HEDERA_TESTNET_URL`: Hedera testnet URL (e.g., https://testnet.hashio.io/api)
   - `HEDERA_ACCOUNT_ID`: Your Hedera testnet account ID
   - `HEDERA_PRIVATE_KEY`: Your private key (for testing only—never commit!)
   - `WEB3_STORAGE_TOKEN`: Your Web3.Storage API token (get from https://web3.storage)

4. Run locally:
   ```
   npm run dev
   ```
   Open http://localhost:3000

### Deployment
- **Frontend**: Deploy to Vercel (`vercel --prod`).
- **Contracts**: 
  ```
  npx hardhat compile
  npx hardhat deploy --network hedera_testnet
  ```
  Update frontend with the deployed contract address.

### Usage Flow
1. Connect wallet (HashPack/Blade).
2. Upload file: Encrypted client-side, uploaded to IPFS, CID generated.
3. Share: Issue a revocable VC to recipient's DID with expiry.
4. Recipient: Verify VC, download from IPFS, decrypt with shared password.
5. Revoke: Issuer revokes VC on-chain—instantly blocks access.

### Development Notes
- **.kiro Folder**: Included for Devpost compliance, showing specs, hooks, and steering used with Kiro AI.
- **Security**: All keys client-side; no backend. Follow OWASP Web3 best practices.
- **Testing**: Use Hedera testnet and Kiro peregrine testnet.
- **Improvements**: Add multi-recipient VCs, HTS token-gated access, mobile support.

### License
MIT License. See LICENSE for details.

Built for Devpost hackathon with Kiro integration. Questions? Open an issue!
