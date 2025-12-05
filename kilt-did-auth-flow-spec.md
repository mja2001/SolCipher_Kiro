# KILT DID Auth Flow Spec

1. User connects wallet (HashPack/Blade)
2. Create/resolve DID via KILT SDK
3. Issue VC with claim
4. Attest on-chain
5. Revoke via registry if needed
6. Verify presentation with ZK proofs