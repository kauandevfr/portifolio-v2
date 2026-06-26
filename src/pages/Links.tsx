import { MessageCircle, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Contato',
    links: [
      {
        title: 'Entre em contato',
        href: 'https://wa.me/5511930946704?text=Ol%C3%A1!%20Quero%20fazer%20um%20or%C3%A7amento!',
        icon: MessageCircle,
      },
    ],
  },
  {
    title: 'Redes Sociais',
    links: [
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/kauanrodrigues.designer',
        icon: Instagram,
      },
    ],
  },
];

const LinksPage = () => {
  return (
    <main className="min-h-screen section-accent-bg flex flex-col items-center px-4 py-12 sm:py-16">
      <Link
        to="/"
        className="self-start max-w-xl w-full mx-auto inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>

      <section className="w-full max-w-xl flex flex-col items-center text-center">
        <img
          src="https://avatars.githubusercontent.com/u/104030967?v=4"
          alt="Kauan Rodrigues"
          className="w-28 h-28 rounded-full border-4 border-primary-foreground/80 object-cover mb-6 shadow-lg"
        />

        <h1 className="section-title !text-7xl sm:!text-8xl md:!text-9xl mb-2 !text-primary-foreground">
          LINKS
        </h1>
        <p className="font-body text-primary-foreground/80 mb-12">
          @kauanrodrigues.designer
        </p>

        <div className="w-full flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title} className="w-full">
              <div className="flex items-center gap-4 mb-5">
                <span className="h-px flex-1 bg-primary-foreground/30" />
                <h2 className="font-heading text-2xl sm:text-3xl text-primary-foreground uppercase tracking-wide">
                  {section.title}
                </h2>
                <span className="h-px flex-1 bg-primary-foreground/30" />
              </div>

              <ul className="w-full flex flex-col gap-4">
                {section.links.map(({ title, href, icon: Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 w-full px-6 py-5 rounded-2xl border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-primary hover:scale-[1.02] hover:border-primary-foreground"
                    >
                      <Icon size={20} />
                      <span className="font-body text-base sm:text-lg font-medium">
                        {title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="mt-14 text-sm text-primary-foreground/70 font-body">
          Desenvolvido por{' '}
          <span className="text-primary-foreground font-medium">
            Kauan Rodrigues
          </span>
        </footer>
      </section>
    </main>
  );
};

export default LinksPage;
