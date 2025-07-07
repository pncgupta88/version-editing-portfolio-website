
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-6">
            About Me
          </h2>
          
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <p className="text-lg md:text-xl">
              I'm <span className="gradient-text-alt font-semibold">Prince Kumar Gupta</span> — a video editor and storyteller who transforms raw footage into visually compelling and engaging content. I specialize in cinematic edits, smooth transitions, and social media-focused visuals using tools like Adobe Premiere Pro.
            </p>
            
            {/* <blockquote className="text-xl md:text-2xl font-medium italic text-center py-8 px-6 relative"> */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl gradient-text-alt opacity-30">"</div>
              <p className="gradient-text relative z-10">
                From short reels to digital storytelling experiences, I bring creativity, precision, and strategy to every project.
              </p>
              <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 text-6xl gradient-text-alt opacity-30 rotate-180">"</div>
            {/* </blockquote> */}

            <div className="mt-12">
              <h3 className="text-2xl font-semibold font-poppins mb-6 gradient-text-alt">
                Core Skills:
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Video Editing', 'Color Grading', 'Audio Editing', 'Storytelling'].map((skill) => (
                  <span
                    key={skill}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 border border-purple-500/30 text-foreground font-medium rounded-full hover:from-purple-600/30 hover:via-pink-600/30 hover:to-cyan-600/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
