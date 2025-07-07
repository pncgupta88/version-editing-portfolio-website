
const Footer = () => {
  return (
    <footer className="py-3 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text font-poppins mb-3">
            Prince Kumar Gupta
          </div>

          <p className="text-foreground/60 mb-2">
            Professional Video Editor • Cinematic Storyteller
          </p>

          <div className="flex justify-center gap-4 mb-2">
            <a
              href="https://instagram.com/version_editing_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:versioneditingstudio@gmail.com"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/prince-kumar-gupta88"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              LinkedIn
            </a>

          </div>

          <div className="text-sm text-foreground/50">
            © 2025 Prince Kumar Gupta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
