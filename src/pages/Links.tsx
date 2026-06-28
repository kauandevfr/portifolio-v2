import { MessageCircle, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Contato',
    links: [
      {
        title: 'WhatsApp',
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
    <main className="min-h-screen bg-background flex flex-col items-center px-4 py-12 sm:py-16">
      <Link
        to="/"
        className="self-start max-w-xl w-full mx-auto inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>

      <section className="w-full max-w-xl flex flex-col items-center text-center">
        {/* Pink hero card around avatar + title */}
        <div className="w-full rounded-3xl bg-primary text-primary-foreground px-6 py-10 mb-12 shadow-elevated relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
          <div className="relative flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/104030967?v=4"
              alt="Kauan Rodrigues"
              className="w-28 h-28 rounded-full border-4 border-primary-foreground object-cover mb-5 shadow-lg"
            />
            <h1 className="section-title !text-7xl sm:!text-8xl md:!text-9xl mb-1 !text-primary-foreground !leading-none">
              LINKS
            </h1>
            <p className="font-body text-primary-foreground/85">
              @kauanrodrigues.designer
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title} className="w-full">
              <div className="flex items-center gap-4 mb-5">
                <span className="h-px flex-1 bg-primary/60" />
                <h2 className="font-heading text-2xl sm:text-3xl text-primary uppercase tracking-wide">
                  {section.title}
                </h2>
                <span className="h-px flex-1 bg-primary/60" />
              </div>

              <ul className="w-full flex flex-col gap-4 items-center">
                {section.links.map(({ title, href, icon: Icon }) => (
                  <li key={href} className="w-full sm:w-auto flex justify-center">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full bg-transparent border-2 border-foreground text-foreground transition-all duration-200 hover:bg-foreground hover:text-background gap-2 w-full sm:w-auto"
                    >
                      <Icon size={20} />
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="mt-14 text-sm text-foreground/60 font-body">
          Desenvolvido por{' '}
          <span className="text-primary font-medium">Kauan Rodrigues</span>
        </footer>
      </section>
    </main>
  );
};

export default LinksPage;
