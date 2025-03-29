
import { Card } from "./ui/card";
import { Tag } from "./ContentCard";

export function HeroSection() {
  return (
    <section className="w-full py-12 px-8">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl font-bold tracking-tight">
            Discover 
            <span className="block">music stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Explore the latest trends and stories about your favorite artists
          </p>
          <div className="flex gap-4">
            <Tag className="bg-black text-white">TRENDING</Tag>
            <Tag className="bg-white text-black border border-black">NEW</Tag>
          </div>
        </div>
        
        <div className="flex-1">
          <Card className="rounded-3xl overflow-hidden bg-black text-white p-0 h-80 relative">
            <img 
              src="https://images.unsplash.com/photo-1507246207829-732ed643ea0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              alt="Concert" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
              <h3 className="text-4xl font-bold tracking-tight">THE BOYZ</h3>
              <p className="text-sm opacity-75 mt-1">new hit single</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
