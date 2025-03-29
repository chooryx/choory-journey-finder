
import { Play } from "lucide-react";
import { Tag } from "./ContentCard";

interface MusicStoryProps {
  image: string;
  title: string;
  songTitle: string;
  hashtags?: string[];
}

export function MusicStory({ image, title, songTitle, hashtags }: MusicStoryProps) {
  return (
    <div className="relative mt-8 rounded-3xl overflow-hidden">
      <div className="relative h-80">
        <img src={image} alt={songTitle} className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80">
          <div className="absolute top-8 left-8 text-white">
            <div className="text-sm">i wanna</div>
            <div className="text-4xl font-bold">
              ROCK<br />
              your body
            </div>
            <div className="mt-2 text-xl">...</div>
          </div>
          
          <div className="absolute bottom-4 right-4">
            <div className="bg-white text-black rounded-full p-4 inline-block">
              <span className="flex">+2 <span className="ml-1">photos</span></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative bg-black text-white p-6">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <button className="bg-white rounded-full p-4">
            <Play className="text-black w-6 h-6" />
          </button>
        </div>
        
        <div className="pt-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-5xl font-bold">{title}</h3>
              <p className="text-sm opacity-75 mt-1">made by blooming</p>
            </div>
            
            <div>
              <Tag className="whitespace-nowrap">NEW VIDEO</Tag>
            </div>
          </div>
          
          <div className="mt-4 space-y-3">
            {hashtags && hashtags.map((tag, index) => (
              <Tag key={index} className="mr-2 mb-2">#{tag}</Tag>
            ))}
          </div>
          
          <div className="mt-8 text-right">
            <button className="text-sm underline">siguiente historia.</button>
          </div>
        </div>
      </div>
    </div>
  );
}
