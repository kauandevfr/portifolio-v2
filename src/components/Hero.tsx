import { ArrowDown, MessageCircle, FolderOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Availability Badge */}
      <div className="absolute top-24 left-50% z-20 rounded-full inline-flex items-center gap-2  px-4 py-2 bg-primary border border-primary/20 animate-fade-in">
        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <span className="font-body text-lg font-medium text-secondary">
          Disponível para projetos
        </span>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <h1 className='title-hero-decoration'> Kauan
          <br />
          Rodrigues
        </h1>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center  p-6 rounded-3xl bg-background">
          {/* Main Content */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-slide-up">
            Kauan Rodrigues
          </h1>

          <p className="font-body text-xl sm:text-2xl md:text-3xl text-foreground mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
      </div>
    </section>
  );
};

export default Hero;
