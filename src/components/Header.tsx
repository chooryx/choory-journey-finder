
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full py-6 px-8 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold">Choory</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" className="rounded-full">
          apply for blogging
        </Button>
        
        <Button variant="outline" className="rounded-full">
          list of designers
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-full">
          <X className="h-5 w-5" />
        </Button>
        
        <Button variant="default" className="rounded-full bg-black text-white hover:bg-gray-800">
          Primfeed
        </Button>
      </div>
    </header>
  );
}
