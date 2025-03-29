
import { useState } from "react";
import { ArtistStory } from "@/components/ArtistStory";
import { ContentCard, Tag } from "@/components/ContentCard";
import { BreakPanel } from "@/components/BreakPanel";
import { MusicStory } from "@/components/MusicStory";

const artists = [
  {
    id: "1",
    name: "JAE",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    name: "NICK",
    image: "https://images.unsplash.com/photo-1618376874869-c4d0a64a586f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    selected: true,
  },
  {
    id: "3",
    name: "HYUN",
    image: "https://images.unsplash.com/photo-1627541718143-1adc1b582e62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGFzaWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Index() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-md mx-auto px-4 py-8 relative">
        {/* Story dots indicator */}
        <div className="flex justify-center gap-2 mb-4">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentPage(dot)}
              className={`w-2 h-2 rounded-full ${
                currentPage === dot ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {currentPage === 0 ? (
          <>
            <ArtistStory artists={artists} />

            <div className="grid grid-cols-2 gap-4 mt-8">
              <ContentCard title="THE BOYZ" subtitle="new hit single">
                <div className="mb-8 flex flex-col space-y-2">
                  <Tag className="self-start">FAVORITE</Tag>
                  <Tag className="self-start">#SpotifySong</Tag>
                </div>
              </ContentCard>

              <BreakPanel />
            </div>
          </>
        ) : (
          <MusicStory 
            image="https://images.unsplash.com/photo-1507246207829-732ed643ea0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            title="THE TIMES"
            songTitle="Rock Your Body"
            hashtags={["VOTE", "SpotifySong"]}
          />
        )}

        {/* Custom center dot as visual element */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" />
      </div>
    </div>
  );
}
