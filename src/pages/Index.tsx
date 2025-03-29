
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedStories } from "@/components/FeaturedStories";

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="max-w-7xl mx-auto">
        <HeroSection />
        <FeaturedStories />
        
        <div className="p-8 text-center border-t border-gray-200 mt-10">
          <p className="text-gray-500">© {new Date().getFullYear()} Choory. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
