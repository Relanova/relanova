import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/32488285886?text=Hallo%20Monia%2C%20ik%20heb%20interesse%20in%20een%20gratis%20gesprek."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5C] text-[#fff] shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:-translate-y-1 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-16 bg-card text-foreground text-sm px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat via WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
