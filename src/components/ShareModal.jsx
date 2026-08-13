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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-darklight rounded-3xl w-full max-w-md shadow-2xl overflow-hidden transform transition-all">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors z-20 text-gray-800 dark:text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8 pb-6">
          <h3 className="text-2xl font-extrabold text-center text-midnight_text dark:text-white mb-6">Share My Profile</h3>

          {/* Digital Portfolio Card UI */}
          <div className="relative bg-gradient-to-br from-[#1a2980] to-[#26d0ce] p-6 rounded-2xl shadow-xl mb-8 overflow-hidden text-white group">
            {/* Decorative bg elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full blur-xl -ml-10 -mb-10"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-4 border-white/30 overflow-hidden mb-4 shadow-lg group-hover:scale-105 transition-transform duration-500">
                <img src="/profile.jpeg" alt={personalInfo.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-extrabold text-xl tracking-tight">{personalInfo.name}</h4>
              <p className="text-white/80 font-medium text-sm mb-4 tracking-wide uppercase">Full Stack .NET Developer</p>
              
              <div className="w-full h-px bg-white/20 mb-4"></div>
              
              <div className="w-full space-y-2 text-sm font-medium">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-[12px] sm:text-xs break-all">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Share Text Preview */}
          <div className="bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-8 relative group shadow-inner">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Message Preview</span>
              <span className="text-[10px] text-primary/80 font-medium bg-primary/10 px-2 py-0.5 rounded-full">Auto-generated</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed italic">
              "{shareText} - <span className="text-primary hover:underline cursor-pointer">{currentUrl}</span>"
            </p>
            <button 
              onClick={handleCopy}
              className="absolute top-4 right-4 p-1.5 bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-100 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 hover:text-primary text-gray-500"
              title="Copy exact message"
            >
              {copied ? (
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
              )}
            </button>
          </div>

          {/* Share Actions */}
          <div className="grid grid-cols-4 gap-4">
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0c-6.627 0-11.996 5.373-11.996 12.001 0 2.115.548 4.186 1.59 5.998l-1.625 5.94 6.081-1.595c1.765.955 3.754 1.458 5.945 1.458 6.625 0 11.997-5.374 11.997-12 0-6.628-5.372-12.002-11.992-12.002zm0 22.06c-1.785 0-3.535-.48-5.068-1.387l-.36-.214-3.766.987.997-3.666-.235-.373c-1.002-1.594-1.528-3.428-1.528-5.347 0-5.551 4.519-10.068 10.071-10.068 5.55 0 10.068 4.517 10.068 10.067s-4.518 10.068-10.069 10.068zm5.525-7.545c-.302-.152-1.791-.884-2.067-.986-.276-.101-.477-.152-.679.151-.201.303-.781.986-.957 1.189-.176.202-.352.227-.654.076-1.545-.776-2.736-1.89-3.771-3.239-.23-.3-.024-.463.128-.614.135-.135.302-.353.453-.531.151-.177.202-.303.303-.504.101-.202.05-.38-.025-.531-.075-.152-.678-1.638-.929-2.242-.244-.59-.492-.51-.678-.519-.176-.01-.378-.01-.58-.01-.202 0-.528.076-.805.379-.276.303-1.055 1.034-1.055 2.522 0 1.488 1.08 2.926 1.232 3.128.151.202 2.133 3.255 5.166 4.563.721.312 1.283.498 1.724.638.724.23 1.384.197 1.9.119.584-.088 1.791-.732 2.043-1.439.252-.707.252-1.313.176-1.439-.075-.127-.276-.202-.579-.353z"/></svg>
              </div>
              <span className="text-xs font-bold text-midnight_text dark:text-white">WhatsApp</span>
            </a>
            
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-[#0077B5]/10 text-[#0077B5] flex items-center justify-center group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <span className="text-xs font-bold text-midnight_text dark:text-white">LinkedIn</span>
            </a>
            
            <a href={shareLinks.email} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-[#EA4335]/10 text-[#EA4335] flex items-center justify-center group-hover:bg-[#EA4335] group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span className="text-xs font-bold text-midnight_text dark:text-white">Email</span>
            </a>
            
            <button onClick={handleCopy} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                {copied ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                )}
              </div>
              <span className="text-xs font-bold text-midnight_text dark:text-white">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
