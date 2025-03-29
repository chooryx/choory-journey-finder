
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Artist {
  id: string;
  name: string;
  image: string;
  selected?: boolean;
}

interface ArtistStoryProps {
  artists: Artist[];
}

export function ArtistStory({ artists }: ArtistStoryProps) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the middle artist selected
  
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artists.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === artists.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      <div className="text-center mb-4">
        <p className="uppercase text-xs tracking-wider mb-1">NEW STORY</p>
        <h2 className="text-3xl font-bold">Who's Playing?</h2>
      </div>
      
      <div className="relative flex justify-center items-center my-8">
        {artists.map((artist, index) => {
          // Determine if the artist is before, at, or after the current position
          const position = 
            index === currentIndex ? "current" : 
            index === (currentIndex - 1 + artists.length) % artists.length ? "prev" : 
            index === (currentIndex + 1) % artists.length ? "next" : "hidden";

          return (
            <div 
              key={artist.id}
              className={cn(
                "absolute rounded-full overflow-hidden transition-all duration-300",
                position === "current" && "z-20 w-28 h-28 opacity-100 scale-100",
                position === "prev" && "z-10 w-20 h-20 opacity-75 -translate-x-20 scale-90",
                position === "next" && "z-10 w-20 h-20 opacity-75 translate-x-20 scale-90",
                position === "hidden" && "opacity-0 scale-50"
              )}
            >
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover"
              />
              
              {position === "current" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-1">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
        {/* Navigation buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-0 -translate-x-8 z-30 bg-white/10 backdrop-blur-sm rounded-full p-1"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-0 translate-x-8 z-30 bg-white/10 backdrop-blur-sm rounded-full p-1"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Current artist name */}
      <div className="text-center">
        <p className="text-lg font-bold uppercase">{artists[currentIndex].name}</p>
      </div>
    </div>
  );
}
