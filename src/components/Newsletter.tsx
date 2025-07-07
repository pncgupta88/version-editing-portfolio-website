
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "Subscribed Successfully!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-alt p-12 border-purple-500/20">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white font-bold">
              @
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-poppins gradient-text mb-4">
              Subscribe To Get Latest Update From Us
            </h2>
            
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay updated with our latest video editing tips, trends, and exclusive offers. 
              Join our community of creators and never miss out on valuable insights.
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubscribing}
                className="flex-1 bg-background/50 border-cyan-500/30 focus:border-cyan-500 text-foreground"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>Weekly Tips</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Exclusive Offers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                <span>Industry Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
