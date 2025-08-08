
import { useState, useEffect } from 'react';
// import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [emailUrl, setEmailUrl] = useState('mailto:versioneditingstudio@gmail.com');

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    if (!isMobile) {
      setEmailUrl('https://mail.google.com/mail/?view=cm&fs=1&to=versioneditingstudio@gmail.com');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_xc8l3xj', // Service ID
        'template_k5qq0so', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '5scbIbzODOUbEhSyi' // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prince-kumar-gupta88',
      icon: '💼',
      handle: 'Prince Kumar Gupta',
      gradient: 'from-cyan-500/10 to-purple-500/20'
    },
    {
      name: 'Email',
      url: emailUrl,
      icon: '📧',
      handle: 'versioneditingstudio@gmail.com',
      gradient: 'from-purple-500/10 to-pink-500/20'
    }
  ];

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-cyan-950/10 via-purple-950/20 to-pink-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text-alt mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to bring your video project to life? Let's discuss your vision and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="glass-card-alt p-8 border-cyan-500/20">
              <h3 className="text-2xl font-bold font-poppins gradient-text-alt mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-background/50 border-cyan-500/30 focus:border-cyan-500 text-foreground"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="bg-background/50 border-cyan-500/30 focus:border-cyan-500 text-foreground"
                    placeholder="Your E-mail Address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-background/50 border-cyan-500/30 focus:border-cyan-500 text-foreground resize-none"
                    placeholder="Tell me about your project, timeline, and vision."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-fuchsia-600 hover:from-cyan-700 hover:via-purple-700 hover:to-fuchsia-700 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <div className="glass-card-alt p-8 border-purple-500/20">
                <h3 className="text-2xl font-bold font-poppins gradient-text mb-6">
                  Get In Touch
                </h3>

                <p className="text-foreground/70 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with creative minds.
                  Whether you need a quick reel edit or a complete short film post-production,
                  let's make something incredible together.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`flex items-center gap-3 p-4 bg-gradient-to-r ${link.gradient} rounded-lg hover:bg-opacity-80 transition-all duration-300 group border border-cyan-500/20 hover:border-pink-400/40`}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                      <div>
                        <div className="gradient-text-alt font-medium text-sm">
                          {link.name}
                        </div>
                        <div className="text-foreground/60 text-xs">
                          {link.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card-alt p-6 border-pink-500/20">
                <h4 className="text-lg font-bold font-poppins gradient-text-alt mb-4">
                  Why Work With Me?
                </h4>
                <div className="space-y-3">
                  {[
                    { text: 'Fast turnaround times', color: 'bg-purple-500' },
                    { text: 'Unlimited revisions', color: 'bg-cyan-500' },
                    { text: 'Professional communication', color: 'bg-pink-500' },
                    { text: 'Competitive pricing', color: 'bg-purple-500' },
                    { text: 'Creative storytelling approach', color: 'bg-cyan-500' }
                  ].map((benefit) => (
                    <div key={benefit.text} className="flex items-center gap-2 text-foreground/80">
                      <div className={`w-2 h-2 ${benefit.color} rounded-full`} />
                      <span className="text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
