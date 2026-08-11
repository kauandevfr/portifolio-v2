import WhatsAppIcon from '@/components/WhatsAppIcon';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TikTokIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.420-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.210 0.918-0.210 1.426 0 0.206 0.013 0.410 0.037 0.610l-0.002-0.024c0.332 2.046 2.086 3.590 4.201 3.590 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.450-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
    />
    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
    />
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" />
    <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" />
    <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
    />
  </svg>
);

const BriefcaseIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="-0.5 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 10.32C22 9.25914 21.5786 8.24172 20.8284 7.49158C20.0783 6.74143 19.0609 6.32001 18 6.32001H6C4.93913 6.32001 3.92178 6.74143 3.17163 7.49158C2.42149 8.24172 2 9.25914 2 10.32"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 10.32C15.91 16.32 8.09 16.32 2 10.32"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.9999 10.32L20.9999 18.32C20.8507 19.4088 20.3192 20.4089 19.5002 21.1417C18.6813 21.8745 17.6285 22.2922 16.5299 22.32H7.38989C6.29132 22.2922 5.23847 21.8745 4.41956 21.1417C3.60064 20.4089 3.0691 19.4088 2.91992 18.32L1.91992 10.32"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00977 6.03998C8.00977 4.97911 8.43119 3.96169 9.18134 3.21155C9.93148 2.4614 10.9489 2.03998 12.0098 2.03998C13.0706 2.03998 14.0881 2.4614 14.8382 3.21155C15.5883 3.96169 16.0098 4.97911 16.0098 6.03998"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const links = [
  {
    title: 'Solicitar orçamento',
    href: 'https://wa.me/5511930946704?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.',
    icon: ArrowRight,
  },
  {
    title: 'Portifólio',
    href: 'https://www.kauanrodrigues.com.br/',
    icon: ArrowRight,
  },
];

const icons = [
  {
    href: 'https://wa.me/5511930946704?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.',
    icon: WhatsAppIcon,
  },
  {
    href: 'https://www.kauanrodrigues.com.br/',
    icon: BriefcaseIcon,
  },
  {
    href: 'https://www.instagram.com/kauanrodrigues.designer',
    icon: InstagramIcon,
  },
  {
    href: 'https://www.linkedin.com/in/kauan-rodrigues-b4b311195/',
    icon: LinkedInIcon,
  },
  {
    href: 'https://www.tiktok.com/@kauanrodrigues.designer',
    icon: TikTokIcon,
  },
];

const LinksPage = () => {
  return (
    <main className="hero-section min-h-screen flex flex-col items-center px-4 py-12 sm:py-16">
      <section className="w-full max-w-xl flex flex-col items-center text-center">
        <div className="w-full text-primary-foreground px-6 py-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" />
          <div className="relative flex flex-col items-center">
            <img
              src="https://avatars.githubusercontent.com/u/104030967?v=4"
              alt="Kauan Rodrigues"
              className="w-40 h-40 rounded-full border-4 border-primary-foreground object-cover mb-5 shadow-lg"
            />
            <h1 className="section-title !text-7xl sm:!text-8xl md:!text-9xl mb-1 !text-primary-foreground !leading-none">
              Kauan R.
            </h1>
            <p className="font-body text-primary-foreground/85">
              @kauanrodrigues.designer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-6">
          {icons.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <ul className="w-full flex flex-col gap-6">
          {links.map(({ title, href, icon: Icon }) => (
            <li key={href} className="w-full flex justify-center">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2 w-full"
              >
                {title}
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
        <footer className="mt-14 text-sm text-foreground/60 font-body">
          Desenvolvido por{' '}
          <span className="text-primary font-medium">Kauan Rodrigues</span>
        </footer>
      </section>
    </main>
  );
};

export default LinksPage;
