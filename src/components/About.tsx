const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/20 -z-10 translate-x-4 translate-y-4" />
              <img
                src="https://avatars.githubusercontent.com/u/104030967?v=4"
                alt="Kauan Rodrigues"
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 md:order-2">
            <h2 className="section-title mb-8">Sobre Mim</h2>
            
            <div className="space-y-6 font-body text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>
                Olá! Eu sou o <strong className="text-foreground">Kauan Rodrigues</strong>.
              </p>
              
              <p>
                Sou desenvolvedor front-end, 21 anos, residente em São Paulo/SP. Tenho formação em 
                Desenvolvimento de Software pela Cubos Academy e experiência prática no desenvolvimento 
                de interfaces modernas utilizando HTML5, CSS3, JavaScript (ES6+), ReactJS, Node.js e 
                PostgreSQL. Também atuo com design, aplicando princípios de UI na criação de produtos digitais.
              </p>
              
              <p>
                Trabalho com ferramentas do ecossistema atual, como Vite, Docker, GitHub e soluções de 
                Inteligência Artificial aplicadas ao desenvolvimento, além de realizar deploy e 
                gerenciamento de aplicações em VPS.
              </p>
              
              <p>
                Atualmente aprofundo meus estudos em arquitetura front-end, performance web e padrões 
                que tornam aplicações mais escaláveis, modulares e de fácil manutenção. Busco entregar 
                código robusto e alinhado às melhores práticas do mercado.
              </p>
              
              <p>
                No tempo livre, estudo novas tecnologias e desenvolvo projetos pessoais. Minhas 
                principais soft skills são: <strong className="text-primary">resolução de problemas</strong>, 
                {' '}<strong className="text-primary">comunicação clara</strong>, 
                {' '}<strong className="text-primary">aprendizagem rápida</strong> e 
                {' '}<strong className="text-primary">trabalho em equipe</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
