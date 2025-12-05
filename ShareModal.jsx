import { useState } from 'react';
import { issueCredential } from '../lib/kiro-sdk';

export default function ShareModal({ cid, onClose }) {
  const [recipientDid, setRecipientDid] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleShare = async () => {
    // Assume ctype and issuerDid ready
    const { credential } = await issueCredential(issuerDid, recipientDid, ctype, { cid, expiry });
    // Send credential to recipient, log to Hedera
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <input placeholder="Recipient DID" value={recipientDid} onChange={e => setRecipientDid(e.target.value)} />
        <input type="date" value={expiry} onChange={e => setExpiry(e.target.value)} />
        <button onClick={handleShare} className="bg-green-500 text-white p-2">Share</button>
        <button onClick={onClose} className="bg-red-500 text-white p-2">Cancel</button>
      </div>
    </div>
  );
}