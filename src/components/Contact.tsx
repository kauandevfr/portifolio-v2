import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-6">Vamos trabalhar juntos?</h2>
          
          <p className="font-body text-xl text-muted-foreground mb-12">
            Se tiver uma boa ideia, vamos tirar do papel juntos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:kauan@kauanrodrigues.com.br"
              className="btn-primary gap-2 w-full sm:w-auto"
            >
              <Mail size={20} />
              Enviar e-mail
            </a>
            <a
              href="https://wa.me/5511930946704"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline gap-2 w-full sm:w-auto"
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
