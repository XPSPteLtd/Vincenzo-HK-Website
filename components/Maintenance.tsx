
import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2, CheckCircle, Trash2, CloudDownload, Key, ExternalLink, AlertTriangle } from 'lucide-react';
import { clearImageCache, getAllCachedImages } from '../services/aiService';

export const Maintenance: React.FC = () => {
  const [isClearing, setIsClearing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [hasPersonalKey, setHasPersonalKey] = useState(false);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setHasPersonalKey(hasKey);
      }
    };
    checkKey();
  }, [showPanel]);

  const handleExport = async () => {
    setIsExporting(true);
    const assets = await getAllCachedImages();
    const blob = new Blob([JSON.stringify(assets, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `vincenzo_capuano_production_assets_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExporting(false);
  };

  const handleClearCache = async () => {
    if (confirm("Are you sure you want to clear the asset cache?")) {
      setIsClearing(true);
      await clearImageCache();
      setIsClearing(false);
      alert("Cache cleared.");
    }
  };

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      // Assume success as per instructions to avoid race conditions
      setHasPersonalKey(true);
    }
  };

  if (!showPanel) {
    return (
      <button 
        onClick={() => setShowPanel(true)}
        className="fixed bottom-2 right-2 z-[60] w-2 h-2 bg-white/5 hover:bg-gold/40 rounded-full transition-all cursor-default opacity-20"
        title="Admin"
      >
        <span className="sr-only">Admin</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-80 bg-charcoal border border-gold/30 p-6 shadow-2xl animate-fade-in-up rounded-xl flex flex-col max-h-[90vh] overflow-y-auto scrollbar-hide">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
           <Sparkles className="text-gold w-4 h-4" />
           <h3 className="text-[10px] font-bold uppercase tracking-mega text-white">Digital Heritage Bridge</h3>
        </div>
        <button onClick={() => setShowPanel(false)} className="text-gray-500 hover:text-white p-1">✕</button>
      </div>

      <p className="text-[10px] text-gray-500 mb-6 leading-relaxed">
        Internal management for digital assets. Manage media library and API configuration.
      </p>

      <div className="space-y-6">
        {/* Quota & Billing Section */}
        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Key size={14} className={hasPersonalKey ? "text-green-500" : "text-gold"} />
              <span className="text-[9px] font-bold uppercase tracking-widest text-white">Quota & Billing</span>
            </div>
            {hasPersonalKey && (
              <span className="flex items-center gap-1 text-[8px] text-green-500 uppercase font-bold">
                <CheckCircle size={10} /> Active
              </span>
            )}
          </div>
          
          {!hasPersonalKey && (
            <div className="flex items-start gap-2 mb-4 p-2 bg-gold/10 border border-gold/20 rounded">
              <AlertTriangle size={12} className="text-gold shrink-0 mt-0.5" />
              <p className="text-[8px] text-gold leading-tight uppercase">
                Configure a personal API key to ensure seamless data fetching for reviews and search grounding.
              </p>
            </div>
          )}

          <button 
            onClick={handleSelectKey}
            className="w-full py-2 bg-gold text-charcoal text-[9px] font-bold uppercase tracking-widest rounded transition-all hover:bg-white flex items-center justify-center gap-2 mb-3"
          >
            <Key size={12} />
            {hasPersonalKey ? "Update API Key" : "Select Personal API Key"}
          </button>

          <a 
            href="https://ai.google.dev/gemini-api/docs/billing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-[8px] text-gray-500 hover:text-white transition-colors uppercase font-medium"
          >
            Billing Documentation <ExternalLink size={8} />
          </a>
        </div>

        {/* Sync Controls */}
        <div className="space-y-3">
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="w-full py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all text-[10px] font-bold uppercase tracking-mega flex items-center justify-center gap-2 rounded-lg"
          >
            {isExporting ? <Loader2 size={14} className="animate-spin" /> : <CloudDownload size={14} />}
            Export Local Assets
          </button>
          
          <button 
            onClick={handleClearCache}
            disabled={isClearing}
            className="w-full py-2 text-red/40 hover:text-red transition-all text-[9px] font-bold uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <Trash2 size={12} />
            Reset Asset Cache
          </button>
        </div>
      </div>
    </div>
  );
};
