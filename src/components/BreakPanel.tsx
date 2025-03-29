
import { useState } from "react";
import { PopupCard } from "./ContentCard";

export function BreakPanel() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  return (
    <div className="relative mt-6">
      <button 
        onClick={() => setIsPopupOpen(true)}
        className="bg-white text-black rounded-3xl p-6 w-full text-left"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm">MAKE</p>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">BRE</span>
              <span className="text-sm">or</span>
              <span className="text-3xl font-bold">AK</span>
            </div>
          </div>
          <div className="text-2xl">...</div>
        </div>
      </button>
      
      <PopupCard 
        title="MAKE or BREAK" 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      >
        <div className="space-y-4">
          <p className="text-gray-700">Would you make or break this artist?</p>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-green-500 text-white rounded-lg py-3 font-bold">MAKE</button>
            <button className="bg-red-500 text-white rounded-lg py-3 font-bold">BREAK</button>
          </div>
        </div>
      </PopupCard>
    </div>
  );
}
