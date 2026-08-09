import { useLayoutEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Fluxo Financeiro",
    description: "Sistema de controle financeiro pessoal com dashboard e gráficos.",
    techs: ["ReactJS", "HTML5", "CSS3", "Node.js", "PostgreSQL"],
    image: "/fluxo-financeiro.avif",
    repo: "https://github.com/kauandevfr/fluxofinanceirofrontend",
    access: "https://fluxofinanceiro.kauanrodrigues.com.br"
  },
  {
    title: "Salve Quebrada",
    description: "Iniciativa social voltada à promoção do esporte e do desenvolvimento social na comunidade.",
    techs: ["ReactJS", "HTML5", "CSS3"],
    image: "/salve-quebrada.avif",
    repo: "https://github.com/kauandevfr/salve-quebrada",
    access: "https://www.salvequebrada.org/"
  },
  {
    title: "Portifólio",
    description: "Projeto autoral desenvolvido com apoio de inteligência artificial, com implementação e customização realizadas manualmente.",
    techs: ["ReactJS", "HTML5", "Inteligência Artificial"],
    image: "/portifolio.avif",
    repo: "https://github.com/kauandevfr/portifolio-v2",
    access: "https://kauanrodrigues.com.br/"
  },
  {
    title: "Tarefas",
    description: "Sistema de controle de tarefas.",
    techs: ["ReactJS", "HTML5", "CSS3", "Node.js", "PostgreSQL"],
    image: "/tarefas.avif",
    repo: "https://github.com/kauandevfr/taskmanagement-frontend",
    access: "https://tarefas.kauanrodrigues.com.br/"
  },
  // {
  //   title: "Mercado",
  //   description: "Aplicação que gerencia sua lista de mercado.",
  //   techs: ["HTML5", "CSS3", "JavaScript", "Inteligência Artificial"],
  //   image: "https://i.ytimg.com/vi/ADxvzM2AQ1I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcjL9SCBKA9yg2tGgXDt-YYJg7Fw",
  //   repo: "https://github.com/kauandevfr/lista-mercado",
  //   access: "https://mercado.kauanrodrigues.com.br/"
  // },
  {
    title: "Métricas",
    description: "Sistema que apresenta algumas informações de homelab caseiro.",
    techs: ["HTML5", "CSS3", "JavaScript", "Inteligência Artificial"],
    image: "/metricas-servidor.avif",
    access: "https://metricas.kauanrodrigues.com.br/"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <a
    href={project.access}
    target="_blank"
    rel="noopener noreferrer"
    className="card-brutalist relative overflow-hidden h-[460px] sm:h-[520px] md:h-[560px] flex flex-col justify-end w-[85vw] max-w-[800px] shrink-0"
  >
    {/* Imagem de Fundo Completa */}
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Gradiente de Escurecimento por Cima da Imagem */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

    {/* Conteúdo de Texto Sobrelapado */}
    <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
      <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-2 tracking-wide">
        {project.title}
      </h3>

      <p className="font-body text-xs sm:text-sm md:text-base text-gray-200 mb-4 sm:mb-6 max-w-2xl leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-body font-medium bg-white/20 text-white backdrop-blur-md rounded-full border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!triggerRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const cards = track.children;
      if (cards.length === 0) return;

      const firstCard = cards[0] as HTMLElement;
      const lastCard = cards[cards.length - 1] as HTMLElement;

      const getScrollAmount = () => {
        return lastCard.offsetLeft - firstCard.offsetLeft;
      };

      const distance = getScrollAmount();

      gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projetos" className="relative overflow-hidden">
      <div
        ref={triggerRef}
        className="h-screen w-full flex flex-col justify-center overflow-hidden  pb-8"
      >
        <div className="text-center mb-8 shrink-0 px-4">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle max-w-4xl mx-auto">
            Seleção dos meus trabalhos mais recentes, demonstrando habilidades em desenvolvimento de sites e design gráfico.
          </p>
        </div>

        {/* Esteira horizontal dos cards */}
        <div
          ref={trackRef}
          className="flex gap-12 sm:gap-32 md:gap-44 items-stretch will-change-transform"
          style={{
            paddingLeft: 'calc(50vw - min(42.5vw, 400px))',
            paddingRight: 'calc(50vw - min(42.5vw, 400px))',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
