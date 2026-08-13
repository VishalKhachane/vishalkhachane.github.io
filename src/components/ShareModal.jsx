import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const ShareModal = ({ isOpen, onClose }) => {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const shareText = `Check out the portfolio of ${personalInfo.name} - Full Stack .NET Developer!`;

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' - ' + currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(personalInfo.name + ' Portfolio')}&body=${encodeURIComponent(shareText + ' - ' + currentUrl)}`
  };

  const handleCopy = () => {
    const fullTextToCopy = `${shareText} - ${currentUrl}`;
    navigator.clipboard.writeText(fullTextToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content - The Card Itself */}
      <div className="relative w-full max-w-sm sm:max-w-md transform transition-all">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 text-white backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Professional Digital Business Card */}
        <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-[#1a2980] via-[#26d0ce] to-primary overflow-hidden shadow-[0_20px_50px_rgba(38,208,206,0.3)]">
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2980] via-[#26d0ce] to-primary opacity-50 animate-pulse"></div>
          
          {/* Inner Card content */}
          <div className="relative bg-white/10 dark:bg-black/50 backdrop-blur-xl rounded-[calc(2rem-2px)] p-8 sm:p-10 border border-white/20 h-full flex flex-col items-center text-white">
            
            {/* Top decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#26d0ce]/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1a2980]/30 rounded-full blur-3xl -ml-10 -mb-10"></div>

            <div className="relative z-10 w-full flex flex-col items-center">
              
              {/* Profile Image with glowing rings */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-md opacity-80 animate-pulse"></div>
                <div className="relative w-32 h-32 rounded-full border-2 border-white/60 p-1 bg-black/40 overflow-hidden shadow-2xl">
                  <img src="/profile.jpeg" alt={personalInfo.name} className="w-full h-full object-cover rounded-full" />
                </div>
              </div>

              {/* Identity */}
              <h2 className="text-3xl font-black tracking-tight text-white mb-2 text-center drop-shadow-md">
                {personalInfo.name}
              </h2>
              <div className="px-5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-200 mb-8 shadow-inner text-center">
                Full Stack .NET Developer
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8"></div>

              {/* Share Options - Modern Floating Buttons */}
              <div className="w-full">
                <p className="text-center text-[11px] font-bold text-white/70 mb-5 uppercase tracking-[0.2em]">Share My Portfolio</p>
                
                <div className="flex justify-center gap-4 sm:gap-6">
                  
                  {/* WhatsApp */}
                  <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" title="Share on WhatsApp" className="group flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(37,211,102,0.4)] transition-all duration-300 backdrop-blur-md">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0c-6.627 0-11.996 5.373-11.996 12.001 0 2.115.548 4.186 1.59 5.998l-1.625 5.94 6.081-1.595c1.765.955 3.754 1.458 5.945 1.458 6.625 0 11.997-5.374 11.997-12 0-6.628-5.372-12.002-11.992-12.002zm0 22.06c-1.785 0-3.535-.48-5.068-1.387l-.36-.214-3.766.987.997-3.666-.235-.373c-1.002-1.594-1.528-3.428-1.528-5.347 0-5.551 4.519-10.068 10.071-10.068 5.55 0 10.068 4.517 10.068 10.067s-4.518 10.068-10.069 10.068zm5.525-7.545c-.302-.152-1.791-.884-2.067-.986-.276-.101-.477-.152-.679.151-.201.303-.781.986-.957 1.189-.176.202-.352.227-.654.076-1.545-.776-2.736-1.89-3.771-3.239-.23-.3-.024-.463.128-.614.135-.135.302-.353.453-.531.151-.177.202-.303.303-.504.101-.202.05-.38-.025-.531-.075-.152-.678-1.638-.929-2.242-.244-.59-.492-.51-.678-.519-.176-.01-.378-.01-.58-.01-.202 0-.528.076-.805.379-.276.303-1.055 1.034-1.055 2.522 0 1.488 1.08 2.926 1.232 3.128.151.202 2.133 3.255 5.166 4.563.721.312 1.283.498 1.724.638.724.23 1.384.197 1.9.119.584-.088 1.791-.732 2.043-1.439.252-.707.252-1.313.176-1.439-.075-.127-.276-.202-.579-.353z"/></svg>
                    </div>
                  </a>
                  
                  {/* LinkedIn */}
                  <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" title="Share on LinkedIn" className="group flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-2xl bg-[#0077B5]/20 border border-[#0077B5]/40 text-[#0077B5] flex items-center justify-center group-hover:bg-[#0077B5] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(0,119,181,0.4)] transition-all duration-300 backdrop-blur-md">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a href={shareLinks.email} title="Share via Email" className="group flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-2xl bg-[#EA4335]/20 border border-[#EA4335]/40 text-[#EA4335] flex items-center justify-center group-hover:bg-[#EA4335] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(234,67,53,0.4)] transition-all duration-300 backdrop-blur-md">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                  </a>
                  
                  {/* Copy Link */}
                  <button onClick={handleCopy} title="Copy Link" className="group flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 backdrop-blur-md ${copied ? 'bg-green-500/30 border-green-400 text-green-300 shadow-[0_10px_20px_rgba(34,197,94,0.4)] -translate-y-1' : 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]'}`}>
                      {copied ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShareModal;
