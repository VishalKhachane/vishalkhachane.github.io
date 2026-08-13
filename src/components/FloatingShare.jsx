import React, { useState } from 'react';
import ShareModal from './ShareModal';

const FloatingShare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="relative group flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-blue-600 text-white rounded-full shadow-[0_4px_20px_rgba(47,115,242,0.6)] hover:shadow-[0_8px_30px_rgba(47,115,242,0.8)] hover:-translate-y-1 transition-all duration-300"
          aria-label="Share Portfolio"
        >
          {/* Ping animation effect */}
          <span className="absolute w-full h-full rounded-full bg-primary opacity-50 animate-ping group-hover:hidden"></span>
          
          <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
          </svg>
        </button>
      </div>

      <ShareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingShare;
