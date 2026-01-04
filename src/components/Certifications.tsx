import { ExternalLink, Award } from 'lucide-react';
import Carousel from './Carousel';

const certificates = [
  {
    title: "Desenvolvimento de Software",
    description: "Formação completa em desenvolvimento web com HTML, CSS, JavaScript, React, Node.js e PostgreSQL.",
    organization: "Cubos Academy",
    year: "2022",
    credential: "https://drive.google.com/file/d/1cpSzyD8tls6vyqLVxEYUzFmbC1a8MlXC/view"
  },
  {
    title: "HTML5",
    description: "Curso introdutório de HTML, CSS e JavaScript com projeto prático final.",
    organization: "Curso em Vídeo",
    year: "2022",
    credential: "https://drive.google.com/file/d/1MhPRVoSZV0qHRgsN0Hod0VlUc66ehso_/view"
  },
  {
    title: "Algoritmos",
    description: "Fundamentos de lógica de programação e construção de algoritmos.",
    organization: "Curso em Vídeo",
    year: "2022",
    credential: "https://drive.google.com/file/d/1yrPsuE55DzQ8eWqdt19cuqqmGQzIMgwY/view"
  },
  {
    title: "Workshop IA Lab",
    description: "Workshop intensivo de IA aplicada ao design e identidade visual.",
    organization: "IA Lab",
    year: "2025",
    credential: "https://drive.google.com/file/d/1cVtlvVukkjDbAevKFoGqM-YEPoa8Dokh/view"
  }
];

const CertificationCard = ({ certificate }: { certificate: typeof certificates[0] }) => (
  <div className="card-brutalist bg-card p-6 h-full flex flex-col">
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
        <Award size={24} />
      </div>
      <span className="font-body text-sm text-muted-foreground">{certificate.year}</span>
    </div>
    
    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
      {certificate.title}
    </h3>
    
    <p className="font-body text-sm text-primary font-medium mb-3">
      {certificate.organization}
    </p>
    
    <p className="font-body text-sm text-muted-foreground mb-6 flex-grow">
      {certificate.description}
    </p>
    
    <a
      href={certificate.credential}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
    >
      Ver credencial
      <ExternalLink size={16} />
    </a>
  </div>
);

const Certifications = () => {
  return (
    <section id="certificacoes" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Certificações & Cursos</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Formação contínua para entregar sempre o melhor resultado.
          </p>
        </div>

        <Carousel>
          {certificates.map((cert, index) => (
            <CertificationCard key={index} certificate={cert} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Certifications;
