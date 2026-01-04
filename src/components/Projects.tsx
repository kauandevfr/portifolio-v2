import { ExternalLink, Github } from 'lucide-react';
import Carousel from './Carousel';

const projects = [
  {
    title: "Fluxo Financeiro",
    description: "Sistema de controle financeiro pessoal com dashboard e gráficos.",
    techs: ["ReactJS", "HTML5", "CSS3", "Node.js"],
    repo: "https://github.com/kauandevfr/fluxofinanceirofrontend",
    access: "https://www.fluxofinanceiro.site"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="card-brutalist bg-card overflow-hidden h-full flex flex-col">
    {/* Project Preview */}
    <div className="h-48 bg-primary/10 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
      <span className="font-heading text-4xl font-bold text-primary/30">
        {project.title.charAt(0)}
      </span>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
        {project.title}
      </h3>
      
      <p className="font-body text-sm text-muted-foreground mb-4 flex-grow">
        {project.description}
      </p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techs.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-body font-medium bg-primary/10 text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex gap-4">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          <Github size={18} />
          Repositório
        </a>
        <a
          href={project.access}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
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
    <section id="projetos" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Seleção dos meus trabalhos mais recentes.
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
