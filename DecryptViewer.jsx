import { useState } from 'react';
import { decryptFile } from '../lib/encryption';
import { getFileFromIPFS } from '../lib/ipfs';
import { verifyPresentation } from '../lib/kiro-sdk';

export default function DecryptViewer({ cid, presentation }) {
  const [password, setPassword] = useState('');
  const [decryptedBlob, setDecryptedBlob] = useState(null);

  const handleDecrypt = async () => {
    const isValid = await verifyPresentation(presentation);
    if (!isValid) return alert('Invalid or Revoked Credential');
    const encryptedFile = await getFileFromIPFS(cid);
    const decrypted = await decryptFile(encryptedFile, password);
    setDecryptedBlob(decrypted);
  };

  return (
    <div>
      <input type="password" placeholder="Decryption Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleDecrypt}>Decrypt</button>
      {decryptedBlob && <a href={URL.createObjectURL(decryptedBlob)} download="decrypted.file">Download Decrypted</a>}
    </div>
  );
}