import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AIVideoIdeaModal from './AIVideoIdeaModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Services',
    href: '#services'
  }, {
    label: 'Portfolio',
    href: '#portfolio'
  }, {
    label: 'Contact',
    href: '#contact'
  }];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`h-[80px] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-background/80 backdrop-blur-md border-b border-purple-500/20'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text font-poppins">Prince K Gupta</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <AIVideoIdeaModal />
          </nav>

          {/* --- MOBILE VIEW KE LIYE NYA SETUP --- */}
          <div className="flex items-center gap-2 md:hidden">
            <AIVideoIdeaModal />
            <button
              className="text-foreground hover:text-purple-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 px-4 border-t border-purple-500/20 bg-background/90 backdrop-blur-md fixed top-[63.5px] left-0 right-0 z-40">
            <div className="flex flex-col space-y-4 items-end">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-right text-foreground/80 hover:text-purple-400 transition-colors duration-300 font-medium py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;