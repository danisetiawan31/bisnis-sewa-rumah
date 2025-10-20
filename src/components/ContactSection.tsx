import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "6288269986343";
  const phoneNumber = "+62 831-7153-6027";
  const email = "danisetiawan3107@gmail.com";

  const handleWhatsAppClick = () => {
    const message = "Halo, saya tertarik untuk menyewa rumah ini.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${whatsappNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Hubungi Kami
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tertarik untuk menyewa rumah ini? Hubungi kami sekarang untuk
            informasi lebih lanjut atau jadwalkan kunjungan.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* WhatsApp */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    WhatsApp
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat langsung dengan kami
                  </p>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="mt-6 w-full bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className=" mr-2 h-4 w-4" />
                    Chat Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Telepon
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {phoneNumber}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Senin - Sabtu, 09:00 - 18:00
                  </p>
                  <Button
                    onClick={handlePhoneClick}
                    variant="outline"
                    className="w-full"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Hubungi
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 break-all">
                    {email}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Respons dalam 24 jam
                  </p>
                  <Button
                    onClick={handleEmailClick}
                    variant="outline"
                    className="w-full"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Kirim Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
