import { PlayCircle } from "lucide-react";

const Portfolio = () => {
  const reels = [
    {
      title: 'Yaadein',
      subtitle: 'A Love Story',
      image: '/thumbnails/yaadein.jpg',
      fallback: '/Uploads/Yaadein.png',
      link: 'https://www.instagram.com/reel/DGdYuLsvaLN/?igsh=N24ybW5zbnprYmtu'
    },
    {
      title: 'Vishwasghaat',
      subtitle: 'A Psychopath\'s Story',
      image: '/thumbnails/vishwashghaat.jpg',
      fallback: '/Uploads/Vishwasghaat.png',
      link: 'https://www.instagram.com/reel/DGTbuZSzxIr/?igsh=MTdtdnVyZWo1MGk3eA=='
    },
    {
      title: 'Bully Part-1',
      subtitle: 'Horror',
      image: '/thumbnails/bully-part-1.jpg',
      fallback: '/Uploads/Bully Part-1.png',
      link: 'https://www.instagram.com/reel/DIbnUKdzw-B/?igsh=bnU2NXJndWN5N3pp'
    },
    {
      title: 'Bully Part-2',
      subtitle: 'Horror',
      image: '/thumbnails/bully-part-2.jpg',
      fallback: '/Uploads/Bully Part-2.png',
      link: 'https://www.instagram.com/reel/DIbnUKdzw-B/?igsh=bnU2NXJndWN5N3pp'
    },
    {
      title: 'Promotional Reel',
      subtitle: 'For a factory.',
      image: '/thumbnails/promotional-reel.jpg',
      fallback: '/Uploads/Promotional Reel.png',
      link: 'https://www.instagram.com/reel/DH311uLTnNS/?igsh=MXB0ZDk4aHFicGcwMQ=='
    }
  ];

  const handleImageError = (reelTitle: string, originalSrc: string) => {
    console.error(`Failed to load thumbnail for ${reelTitle}:`, originalSrc);
  };

  const handleImageLoad = (reelTitle: string) => {
    console.log(`Successfully loaded thumbnail for ${reelTitle}`);
  };

  return (
    <section id="portfolio" className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text-alt mb-4">
            My Best Reels
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my top 5 reels that demonstrate my storytelling and editing expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reels.map((reel, index) => (
            <a
              key={reel.title}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card-alt border-cyan-500/20 hover:border-cyan-400/40 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={reel.image}
                  alt={`${reel.title} – ${reel.subtitle} thumbnail`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Primary image failed for ${reel.title}, switching to fallback`);
                    const target = e.target as HTMLImageElement;
                    target.src = reel.fallback;
                    handleImageError(reel.title, reel.image);
                  }}
                  onLoad={() => handleImageLoad(reel.title)}
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/80 to-pink-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-white border-t-transparent border-b-transparent ml-1" />
                  </div> */}
                  {/* <div className="rounded-full bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] p-2 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <PlayCircle className="w-10 h-10 text-neutral-800" />
                  </div> */}
                  <PlayCircle className="w-14 h-14 text-yellow-500 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0">
                  <h3 className="text-white font-bold text-lg font-poppins">{reel.title}</h3>
                  <p className="text-white/80 text-sm">{reel.subtitle}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins gradient-text-alt mb-2">
                  {reel.title}
                </h3>
                <p className="text-foreground/70 font-medium">
                  {reel.subtitle}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <span className="text-sm font-medium">View on Instagram</span>
                  <div className="ml-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400 transform rotate-45"></div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card-alt p-8 max-w-2xl mx-auto border-cyan-500/20">
            <h3 className="text-2xl font-bold font-poppins gradient-text-alt mb-4">
              Want to see more work?
            </h3>
            <p className="text-foreground/70 mb-6">
              Follow me on Instagram 
            </p>
            <a
              href="https://instagram.com/version_editing_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 via-purple-600 to-fuchsia-600 hover:from-cyan-700 hover:via-purple-700 hover:to-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Follow @version_editing_
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

