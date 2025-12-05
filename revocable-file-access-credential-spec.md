# Revocable File Access Credential Spec (KILT)

CType: FileAccessGrant
Properties:
- cid: string (IPFS CID)
- expires: timestamp
- revocable: boolean

Issuer: Light DID (uploader)
Holder: Full DID (recipient)
Verification: Check revocation registry before decryption
ZK Option: Prove attributes without identity reveal (e.g., 'is licensed professional')