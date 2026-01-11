import { ArrowDown, MessageCircle, FolderOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden pt-20">



      <div className="absolute left-1/2 -translate-x-1/2 top-24 z-20 rounded-full inline-flex items-center gap-2 px-4 py-2 bg-primary animate-fade-in">
        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <span className="font-body text-sm font-medium text-secondary">
          Disponível para projetos
        </span>
      </div>

      <div className="section-container !ml-9 !p-0 relative z-10">
        <div className="max-w-4xl mx-auto text-left">

          <h1 className="!leading-[80%] uppercase font-heading text-9xl sm:text-9xl md:text-9xl lg:text-[22rem] text-foreground mb-4 animate-slide-up">
            Kauan <br /> Rodrigues
          </h1>

          <p className="font-body text-xl sm:text-2xl md:text-3xl text-ackground mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Designer & Desenvolvedor de Sites
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="https://wa.me/5511930946704"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Entre em contato
            </a>
            <a
              href="#projetos"
              className="btn-outline gap-2 w-full sm:w-auto"
            >
              <FolderOpen size={20} />
              Ver projetos
            </a>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Hero;
