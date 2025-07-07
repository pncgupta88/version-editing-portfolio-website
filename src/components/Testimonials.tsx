
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      company: "SJ Media",
      rating: 5,
      testimonial: "Prince's editing transformed my raw footage into cinematic masterpieces. His attention to detail and creative vision exceeded my expectations. Highly recommended!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Marketing Director", 
      company: "TechFlow Inc",
      rating: 5,
      testimonial: "Working with Prince was a game-changer for our brand videos. Fast turnaround, professional quality, and excellent communication throughout the project.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Influencer",
      company: "Fashion Forward",
      rating: 5,
      testimonial: "Prince understood my vision perfectly and delivered stunning Instagram reels that boosted my engagement by 300%. His creativity is unmatched!",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-medium tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-4">
            What People Say About Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from clients who've experienced our video editing magic
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card-alt p-6 hover-lift animate-scale-in border-cyan-500/20 hover:border-pink-400/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold gradient-text-alt">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
