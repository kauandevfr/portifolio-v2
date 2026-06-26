import { MessageCircle, Instagram, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  {
    title: 'Entre em contato',
    href: 'https://wa.me/5511930946704?text=Ol%C3%A1!%20Quero%20fazer%20um%20or%C3%A7amento!',
    icon: MessageCircle,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/kauanrodrigues.designer',
    icon: Instagram,
  },
];

const LinksPage = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center px-4 py-12 sm:py-20">
      <Link
        to="/"
        className="self-start max-w-xl w-full mx-auto inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Voltar
      </Link>

      <section className="w-full max-w-xl flex flex-col items-center text-center">
        <img
          src="https://avatars.githubusercontent.com/u/104030967?v=4"
          alt="Kauan Rodrigues"
          className="w-28 h-28 rounded-full border-2 border-primary/40 object-cover mb-6"
        />

        <h1 className="section-title !text-7xl sm:!text-8xl md:!text-9xl mb-2">
          LINKS
        </h1>
        <p className="font-body text-foreground/70 mb-10">
          @kauanrodrigues.designer
        </p>

        <ul className="w-full flex flex-col gap-4">
          {links.map(({ title, href, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-brutalist group flex items-center justify-center gap-3 w-full px-6 py-5 bg-background/5 hover:bg-primary hover:text-primary-foreground"
              >
                <Icon
                  size={20}
                  className="text-primary group-hover:text-primary-foreground transition-colors"
                />
                <span className="font-body text-base sm:text-lg font-medium">
                  {title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-12 text-sm text-foreground/60 font-body">
          Desenvolvido por{' '}
          <span className="text-foreground font-medium">Kauan Rodrigues</span>
        </footer>
      </section>
    </main>
  );
};

export default LinksPage;
