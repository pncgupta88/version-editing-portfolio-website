import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen pt-[80px] flex items-center justify-center relative overflow-hidden">
    {/* Background with purple gradients */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-violet-800/40 via-background to-indigo-700/30" />

    {/* Purple floating elements */}
    <div className="absolute top-1/4 left-1/6 w-48 h-48 bg-gradient-to-r from-purple-400/40 via-violet-300/30 to-indigo-200/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-l from-violet-500/30 via-purple-400/25 to-indigo-300/15 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-indigo-300/25 to-purple-200/20 rounded-full blur-2xl animate-pulse delay-2000" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left side - Profile Image */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative">
            {/* Simplified profile image structure */}
            <img src="/Uploads/Profile Pic.png" alt="Prince Kumar Gupta profile picture" width="405" height="433" className="profile-img" fetchPriority='high'/>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          {/* Main heading */}
          <div className="min-h-[150px]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
              <span className="text-white block mb-2">Hi, I'm Prince,</span>
              <span className="gradient-text-alt block text-4xl md:text-5xl lg:text-6xl">
                Video Editor
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-2xl px-2 text-center lg:text-left">
              <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed font-poppins">
                I am a passionate video editor who brings stories to life through engaging visuals. My focus is on creating content that reflects professionalism and delivers impact in every frame of visual storytelling.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Button onClick={scrollToPortfolio} size="lg" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:text-white font-poppins font-semibold px-12 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <span className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 sm:gap-16">
            {/* <div className="text-center lg:text-left">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-poppins">6+</div>
              <div className="text-white/60 font-poppins">Months Experience</div>
            </div> */}
            <div className="text-center lg:text-left">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-poppins">30+</div>
              <div className="text-white/60 font-poppins">Projects Completed</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-poppins">5+</div>
              <div className="text-white/60 font-poppins">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default Hero;