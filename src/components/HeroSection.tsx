import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const HeroSection = () => {
  const whatsappNumber = "6288269986343";
  const whatsappMessage = "Halo, saya tertarik untuk menyewa rumah ini.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Rasakan Kehangatan Rumah, Setiap Harinya.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Rumah siap huni dengan fasilitas lengkap dan lokasi strategis.
        </p>
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-6 py-4 h-auto animate-in fade-in slide-in-from-bottom-4 duration-10 delay-10"
        >
          <MessageCircle className="h-5 w-5" />
          Hubungi via WhatsApp
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
