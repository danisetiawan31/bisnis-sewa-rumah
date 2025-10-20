import { Card, CardContent } from "@/components/ui/card";
import { Wind, Wifi, Droplet, Zap, Car, UserCheck } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    { icon: Wind, label: "AC di Setiap Kamar", description: "Semua kamar dilengkapi AC" },
    { icon: Wifi, label: "Free Wi-Fi", description: "Internet cepat gratis" },
    { icon: Droplet, label: "Air Sumur Pribadi", description: "Air bersih dari sumur sendiri" },
    { icon: Zap, label: "Listrik Reguler", description: "Bukan token, bayar sendiri" },
    { icon: Car, label: "Parkir Luas", description: "Carport teduh untuk 4 mobil & 4 motor" },
    { icon: UserCheck, label: "Tanpa Batasan", description: "Tidak ada syarat khusus penyewa" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Fasilitas Lengkap
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Nikmati berbagai fasilitas modern untuk kenyamanan Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <facility.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{facility.label}</h3>
                      <p className="text-sm text-muted-foreground">{facility.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
