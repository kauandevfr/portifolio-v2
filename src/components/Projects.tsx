import { ExternalLink, Github } from 'lucide-react';
import Carousel from './Carousel';

const projects = [
  {
    title: "Fluxo Financeiro",
    description: "Sistema de controle financeiro pessoal com dashboard e gráficos.",
    techs: ["ReactJS", "HTML5", "CSS3", "Node.js"],
    repo: "https://github.com/kauandevfr/fluxofinanceirofrontend",
    access: "https://fluxofinanceiro.kauanrodrigues.com.br"
  },
  {
    title: "Projeto Salve Quebrada",
    description: "Iniciativa social voltada à promoção do esporte e do desenvolvimento social na comunidade.",
    techs: ["ReactJS", "HTML5", "CSS3"],
    repo: "https://github.com/kauandevfr/salve-quebrada",
    access: "https://www.salvequebrada.org/"
  },
  {
    title: "Portifólio",
    description: "Projeto autoral desenvolvido com apoio de inteligência artificial, com implementação e customização realizadas manualmente.",
    techs: ["ReactJS", "HTML5", "Inteligência Artificial"],
    repo: "https://github.com/kauandevfr/portifolio-v2",
    access: "https://kauanrodrigues.com.br/"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="card-brutalist bg-card overflow-hidden h-full flex flex-col">
    {/* Project Preview */}
    <div className="h-48 bg-primary/50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
      <span className="font-heading text-8xl">
        {project.title.charAt(0)}
      </span>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-heading text-6xl text-background mb-2">
        {project.title}
      </h3>

      <p className="font-body text-sm text-muted-foreground mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techs.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-body font-medium bg-primary/10 text-primary rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {/* <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          <Github size={18} />
          Repositório
        </a> */}
        <a
          href={project.access}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-lg font-medium text-background transition-colors"
        >
          <ExternalLink size={18} />
          Acessar
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projetos" className="py-12 md:py-20 ">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle max-w-4xl mx-auto">
            Seleção dos meus trabalhos mais recentes, demonstrando habilidades em desenvolvimento de sites e design gráfico.
          </p>
        </div>

        {projects.length > 1 ? (
          <Carousel>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Carousel>
        ) : (
          <div className="max-w-md mx-auto">
            <ProjectCard project={projects[0]} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
