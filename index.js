import WalletConnect from '../components/WalletConnect';
import FileUploader from '../components/FileUploader';
import ShareModal from '../components/ShareModal';
import { useState } from 'react';

export default function Home() {
  const [cid, setCid] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleUpload = (newCid) => {
    setCid(newCid);
    setShowModal(true);
  };

  return (
    <main className="p-4">
      <WalletConnect />
      <FileUploader onUpload={handleUpload} />
      {showModal && <ShareModal cid={cid} onClose={() => setShowModal(false)} />}
    </main>
  );
}