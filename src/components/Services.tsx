
const Services = () => {
  const services = [
    {
      title: "Instagram Reel Editing",
      description: "Transform your raw footage into engaging, scroll-stopping reels that capture attention and drive engagement.",
      features: ["Quick turnaround", "Trendy transitions", "Music sync", "Text animations"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Short Film Post-Production",
      description: "Complete post-production services for your short films, from color grading to sound design.",
      features: ["Color correction", "Sound mixing", "Cinematic transitions", "Final delivery"],
      gradient: "from-cyan-600 to-purple-600"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Contact",
      description: "Reach out via email or Instagram DM with your project details and vision.",
      color: "from-purple-600 to-purple-700"
    },
    {
      step: "2",
      title: "Discovery Call",
      description: "We'll have a brief call to discuss your requirements, timeline, and budget.",
      color: "from-cyan-600 to-cyan-700"
    },
    {
      step: "3",
      title: "Asset Sharing",
      description: "Share your raw footage and assets via Google Drive or WeTransfer.",
      color: "from-pink-600 to-purple-700"
    },
    {
      step: "4",
      title: "Editing Magic",
      description: "I'll work on your project, keeping you updated with previews and progress.",
      color: "from-purple-600 via-pink-600 to-cyan-600"
    },
    {
      step: "5",
      title: "Final Delivery",
      description: "Receive your polished video in your preferred format, ready to publish.",
      color: "from-cyan-600 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-6">
            Services
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Professional video editing services tailored to bring your creative vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift animate-fade-in border-purple-500/20 hover:border-pink-400/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-2xl font-bold font-poppins mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.title}
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-foreground/60">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold font-poppins mb-6 gradient-text-alt">
            How We Work Together
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A simple, streamlined process to bring your video projects to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {process.map((item, index) => (
            <div
              key={index}
              className="flex items-start mb-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 shadow-lg hover:scale-110 transition-transform duration-300`}>
                {item.step}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold font-poppins mb-2 gradient-text-alt">
                  {item.title}
                </h4>
                <p className="text-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
