
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

export function ContentCard({ title, subtitle, className, children }: ContentCardProps) {
  return (
    <div 
      className={cn(
        "relative bg-black text-white rounded-3xl overflow-hidden p-6",
        "flex flex-col animate-fade-in",
        className
      )}
    >
      <div className="flex-1">
        {children}
      </div>
      
      <div className="mt-auto">
        <h3 className="text-4xl font-bold tracking-tight">{title}</h3>
        {subtitle && <p className="text-sm opacity-75 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span 
      className={cn(
        "inline-block rounded-full bg-white text-black px-4 py-2 font-medium text-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

interface PopupCardProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function PopupCard({ title, isOpen, onClose, children }: PopupCardProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl max-w-md w-full animate-slide-up">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">{title}</h3>
          <button onClick={onClose} className="text-gray-500">
            X
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
