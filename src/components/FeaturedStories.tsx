
import { Card, CardContent } from "./ui/card";
import { Tag } from "./ContentCard";

const stories = [
  {
    id: "1",
    title: "THE TIMES",
    subtitle: "Rock Your Body",
    image: "https://images.unsplash.com/photo-1507246207829-732ed643ea0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    tags: ["VOTE", "SpotifySong"]
  },
  {
    id: "2",
    title: "JAE",
    subtitle: "Behind the scenes",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    tags: ["FEATURED"]
  },
  {
    id: "3",
    title: "NICK",
    subtitle: "New album release",
    image: "https://images.unsplash.com/photo-1618376874869-c4d0a64a586f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    tags: ["TRENDING"]
  },
  {
    id: "4",
    title: "HYUN",
    subtitle: "Tour dates announced",
    image: "https://images.unsplash.com/photo-1627541718143-1adc1b582e62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGFzaWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    tags: ["UPCOMING"]
  }
];

export function FeaturedStories() {
  return (
    <section className="w-full py-12 px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Featured Stories</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stories.map((story) => (
          <Card key={story.id} className="rounded-3xl overflow-hidden border-none shadow-lg h-80">
            <div className="relative w-full h-full">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <Tag key={tag} className="bg-white text-black text-xs px-3 py-1">
                    {tag}
                  </Tag>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-2xl font-bold text-white">{story.title}</h3>
                <p className="text-sm text-white/70">{story.subtitle}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
