
const Experience = () => {
  const milestones = [
    {
      date: 'January 2024',
      title: 'Started Freelance Journey',
      description: 'Began my professional video editing career, focusing on social media content and short films.',
      type: 'milestone',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      date: 'March 2024',
      title: 'First Short Film Project',
      description: 'Completed editing for "Yaadein" - a love-themed short film that showcased my storytelling abilities.',
      type: 'project',
      gradient: 'from-cyan-600 to-purple-600'
    },
    {
      date: 'June 2024',
      title: 'Commercial Success',
      description: 'Successfully delivered multiple commercial projects including brand promotions and product advertisements.',
      type: 'achievement',
      gradient: 'from-pink-600 to-cyan-600'
    },
    {
      date: 'September 2024',
      title: 'Thriller Genre Mastery',
      description: 'Completed "Vishwasghaat" - demonstrating expertise in suspenseful editing and atmospheric storytelling.',
      type: 'project',
      gradient: 'from-purple-600 via-pink-600 to-cyan-600'
    },
    {
      date: 'Present',
      title: 'Expanding Horizons',
      description: 'Continuously learning new techniques and building relationships with creators across different industries.',
      type: 'milestone',
      gradient: 'from-cyan-600 to-purple-600'
    }
  ];

  const getTypeColors = (type: string) => {
    switch (type) {
      case 'milestone':
        return 'bg-purple-500/20 text-purple-300';
      case 'project':
        return 'bg-cyan-500/20 text-cyan-300';
      case 'achievement':
        return 'bg-pink-500/20 text-pink-300';
      default:
        return 'bg-purple-500/20 text-purple-300';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text mb-4">
            Experience
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My journey as a freelance video editor, from first project to present day
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-500 to-cyan-600 transform md:-translate-x-px"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-to-br ${milestone.gradient} rounded-full border-4 border-background transform md:-translate-x-1/2 flex items-center justify-center text-sm shadow-lg`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Content */}
                <div className={`glass-card-alt p-6 ml-16 md:ml-0 md:w-5/12 hover-lift border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent font-semibold text-sm">
                      {milestone.date}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColors(milestone.type)}`}>
                      {milestone.type}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold font-poppins mb-3 bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`}>
                    {milestone.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {[
            { number: '12+', label: 'Months Experience', gradient: 'from-purple-600 to-pink-600' },
            { number: '25+', label: 'Projects Completed', gradient: 'from-cyan-600 to-purple-600' },
            { number: '15+', label: 'Happy Clients', gradient: 'from-pink-600 to-cyan-600' },
            { number: '100%', label: 'Satisfaction Rate', gradient: 'from-purple-600 via-pink-600 to-cyan-600' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card-alt p-6 text-center hover-lift animate-scale-in border-cyan-500/20 hover:border-pink-400/40 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl font-bold font-poppins mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
