import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511924947348?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </a>
  );
};

export default WhatsAppButton;