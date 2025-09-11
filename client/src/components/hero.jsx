import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { shoes } from "../media/datas"; 

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

   
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shoes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  
  const getImageKey = (index) => `image${index + 1}`;
  const currentImage = shoes[currentIndex]?.[getImageKey(currentIndex)] || "/fallback-shoe.jpg";

  return (
    <section className="relative min-h-[80vh] pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`space-y-6 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
            <div className="space-y-2">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium animate-delay-100">
                New Collection
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-balance">
                Elevate Your <span className="text-primary">Movement</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] animate-delay-200">
                Discover our collection of premium footwear designed for performance and style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-delay-300">
              <button className="bg-primary text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors">
                Shop Collection
                <ChevronRight className="h-4 w-4" />
              </button>
              <button className="border border-border px-6 py-3 rounded-md hover:bg-border/10 transition-colors">
                Explore Featured
              </button>
            </div>
          </div>

         
          <div className={`relative flex justify-center ${isLoaded ? "animate-fade-in animate-delay-400" : "opacity-0"}`}>
            <div className="relative w-full max-w-[500px] max-h-[600px]">
              <img
                src={currentImage}
                alt={`Shoe ${currentIndex + 1}`}
                className="w-full h-[500px] object-cover rounded-lg shadow-xl transform -rotate-6 z-20 relative transition-all duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.target).src = "/fallback-shoe.jpg";
                }}
              />

              <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-primary/5 rounded-full filter blur-3xl z-10"></div>
              <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl z-10"></div>

              <div className="absolute top-[20%] right-[-10%] bg-gradient-to-r from-purple-400 to-pink-500 w-24 h-24 rounded-full flex items-center justify-center shadow-lg animate-float z-30">
                <img
                  src="https://shop.teamsg.in/cdn/shop/files/7_18802ff5-0898-4514-987d-16aaf2bd435e.png?v=1720251201&width=1946"
                  alt="Premium Design"
                  className="w-14 h-14 object-contain rounded-full"
                />
              </div>

              <div className="absolute bottom-[20%] left-[-10%] bg-gradient-to-r from-blue-400 to-green-500 w-24 h-24 rounded-full flex items-center justify-center shadow-lg animate-float z-30 animate-delay-500">
                <img
                  src="https://shop.teamsg.in/cdn/shop/files/1_ee84a279-8cc7-463e-b282-a22b398f553f.png?v=1720251201"
                  alt="Performance Tech"
                  className="w-14 h-14 object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
