
import { useState, useEffect } from 'react';
import { Instagram, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock data for social media posts
// In a real app, these would come from Instagram/TikTok APIs
const mockInstagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=600",
    caption: "Our new Monaco GP collection is here! #F1Fashion #MonacoGP",
    likes: 1243,
    date: "2h ago"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&h=600",
    caption: "Limited edition Ferrari spoiler shelf - perfect for any F1 fan's home #F1Decor",
    likes: 892,
    date: "6h ago"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&h=600",
    caption: "New 3D track posters available now! #F1Art #WallDecor",
    likes: 1567,
    date: "1d ago"
  },
  {
    id: 4,
    image: "https://placeimg.com/600/600/tech",
    caption: "Behind the scenes at our McLaren LED lamp photoshoot #F1Lighting",
    likes: 943,
    date: "2d ago"
  }
];

const mockTikTokPosts = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=600",
    caption: "Unboxing our new Silverstone 3D track model! #F1Unboxing #SilverstoneGP",
    views: "42.5K",
    date: "3h ago"
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&h=600",
    caption: "Watch the LED colors change on our new Red Bull team lamp! #F1Tech",
    views: "103K",
    date: "1d ago"
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&h=600",
    caption: "How to install your F1 car spoiler shelf in 30 seconds! #DIY #F1Home",
    views: "89.2K",
    date: "2d ago"
  }
];

const SocialMediaFeeds = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('social-media-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return (
    <section 
      id="social-media-section"
      className={`py-16 bg-f1-black transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          FOLLOW OUR <span className="text-f1-red">SOCIAL</span> MEDIA
        </h2>
        
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Instagram className="w-6 h-6 mr-2 text-f1-red" />
            <h3 className="text-2xl font-orbitron">Latest from Instagram</h3>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {mockInstagramPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <Card className="bg-f1-carbon border-f1-gray/10 hover:border-f1-red/50 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative group overflow-hidden">
                        <img
                          src={post.image}
                          alt={`Instagram post ${post.id}`}
                          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <p className="text-sm text-white line-clamp-2 mb-2">{post.caption}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-white/80">♥ {post.likes}</span>
                            <span className="text-xs text-white/80">{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-f1-red text-white border-none hover:bg-f1-red/80" />
            <CarouselNext className="right-2 bg-f1-red text-white border-none hover:bg-f1-red/80" />
          </Carousel>
        </div>
        
        <div>
          <div className="flex items-center justify-center mb-6">
            <Music className="w-6 h-6 mr-2 text-f1-red" />
            <h3 className="text-2xl font-orbitron">Latest from TikTok</h3>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {mockTikTokPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-f1-carbon border-f1-gray/10 hover:border-f1-red/50 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative group overflow-hidden">
                        <div className="aspect-[9/16] bg-f1-black">
                          <img
                            src={post.thumbnail}
                            alt={`TikTok post ${post.id}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-f1-red/80 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-gradient-to-t from-black/90 to-black/70">
                          <p className="text-sm text-white line-clamp-2 mb-2">{post.caption}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-white/80">👁 {post.views}</span>
                            <span className="text-xs text-white/80">{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-f1-red text-white border-none hover:bg-f1-red/80" />
            <CarouselNext className="right-2 bg-f1-red text-white border-none hover:bg-f1-red/80" />
          </Carousel>
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="btn-outline mx-2">
            Follow on Instagram
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="btn-outline mx-2">
            Follow on TikTok
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeeds;
