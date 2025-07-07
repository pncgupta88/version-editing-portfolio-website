import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const achievements = [
    {
      title: "My Complete Project",
      count: "250+",
      description: "Successfully completed projects across various industries",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "5 Years Of Experience", 
      count: "5+",
      description: "Years of professional video editing experience",
      gradient: "from-cyan-600 to-purple-600"
    },
    {
      title: "My Satisfied Clients",
      count: "100+", 
      description: "Happy clients who trust our creative vision",
      gradient: "from-pink-600 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-950/10 via-pink-950/20 to-cyan-950/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent font-medium tracking-wider uppercase text-sm mb-4 block">
              About Me
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              <span className="gradient-text">Designing Solutions, Not</span>
              <br />
              <span className="gradient-text-alt">Just Visuals</span>
            </h2>
            
            <p className="text-foreground/70 leading-relaxed mb-8">
              I'm a passionate video editor who believes in the power of storytelling through visual media. 
              With expertise in creating compelling narratives, I transform raw footage into cinematic experiences 
              that captivate audiences and drive results for businesses.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold gradient-text-alt mb-1">My Complete Project</h4>
                  <p className="text-sm text-foreground/60">End-to-end video production from concept to final delivery</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold gradient-text-alt mb-1">5 Years Of Experience</h4>
                  <p className="text-sm text-foreground/60">Proven track record in professional video editing</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Download CV
            </Button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-pink-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-cyan-500/20 rounded-full blur-2xl" />
              
              {/* Main image container */}
              <div className="glass-card-alt p-8 relative z-10 border-cyan-500/20">
                <div className="aspect-square bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-cyan-600/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Profile placeholder */}
                  <div className="text-center">
                    <div className="w-40 h-40 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                      <div className="text-6xl">👨‍💻</div>
                    </div>
                    <p className="gradient-text-alt font-medium text-lg">Prince Gupta</p>
                    <p className="text-sm text-foreground/60">Video Editor & Storyteller</p>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-cyan-300 text-sm">🎬</span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-pink-400/20 rounded-lg flex items-center justify-center">
                    <span className="text-pink-300 text-sm">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card-alt p-6 text-center hover-lift animate-scale-in border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-4xl font-bold font-poppins mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {achievement.count}
              </div>
              <h4 className="font-semibold gradient-text-alt mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
