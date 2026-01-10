import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/kauandevfr",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/kauan-rodrigues-b4b311195/",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: "mailto:kauan@kauanrodrigues.com.br",
      icon: Mail,
      label: "Email"
    }
  ];

  return (
    <footer className="py-4 border-t border-foreground/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            Desenvolvido por: <span className="text-foreground font-medium">Kauan Rodrigues</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
