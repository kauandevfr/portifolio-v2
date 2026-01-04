import { ArrowDown, MessageCircle, FolderOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 border border-primary/20 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-body text-sm font-medium text-primary">
              Disponível para projetos
            </span>
          </div>

          {/* Main Content */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-slide-up">
            Kauan Rodrigues
          </h1>
          
          <p className="font-body text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Designer & Desenvolvedor de Sites
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="font-body text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
