import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react';

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

const Contact = () => {
  return (
    <section id="contato" className="py-16 md:py-24 min-h-screen flex items-center bg-background text-foreground overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12">
        <div className="flex flex-col justify-between min-h-[75vh] gap-12">

          {/* Canto Superior Esquerdo */}
          <div className="text-left">
            <h2 className="!leading-[80%] uppercase font-heading text-9xl sm:text-9xl md:text-9xl lg:text-[22rem] text-left mb-3">
              <span className="block text-white">VAMOS TRABALHAR</span>
              <span className="block text-primary">JUNTOS?</span>
            </h2>

            <p className="font-body text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed">
              Se você tem uma boa ideia, vamos tirá-la do papel.
            </p>
          </div>

          {/* Seção de Ações e Redes (Horizontal) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full pt-4">
            {/* Ícones das redes e Desenvolvido por */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 flex items-center justify-center text-white hover:text-primary transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon size={36} className="text-white" />
                  </a>
                ))}
              </div>

              <p className="font-body text-lg sm:text-xl text-gray-300">
                Desenvolvido por: <span className="text-white font-medium">Kauan Rodrigues</span>
              </p>
            </div>

            {/* Botões principais */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="mailto:kauan@kauanrodrigues.com.br"
                className="btn-primary justify-center gap-2 w-full sm:w-auto text-xl px-10 py-5"
              >
                <Mail size={24} />
                Enviar e-mail
              </a>
              <a
                href="https://wa.me/5511930946704"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center gap-2 w-full sm:w-auto text-xl px-10 py-5"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
