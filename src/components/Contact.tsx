import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 md:py-20 section-accent-bg">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">Vamos trabalhar juntos?</h2>
          
          <p className="font-body text-xl text-muted-foreground mb-12">
            Se tiver uma boa ideia, vamos tirar do papel juntos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:kauan@kauanrodrigues.com.br"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full bg-background text-primary transition-all duration-200 hover:bg-background/90 gap-2 w-full sm:w-auto"
            >
              <Mail size={20} />
              Enviar e-mail
            </a>
            <a
              href="https://wa.me/5511930946704"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full bg-transparent border-2 border-white text-white transition-all duration-200 hover:bg-white hover:text-primary gap-2 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
