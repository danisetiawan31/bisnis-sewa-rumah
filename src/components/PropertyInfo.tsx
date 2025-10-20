import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Maximize, Home, UtensilsCrossed, Armchair, DoorOpen, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PropertyInfo = () => {
  const specs = [
    { icon: Bed, label: "Kamar Tidur", value: "3", detail: "Semua ber-AC" },
    { icon: Bath, label: "Kamar Mandi", value: "2" },
    { icon: Maximize, label: "Luas Tanah", value: "±200-250 m²" },
    { icon: Home, label: "Luas Bangunan", value: "±150 m²" },
  ];

  const rooms = [
    { icon: DoorOpen, label: "Ruang Teras" },
    { icon: Armchair, label: "Ruang Keluarga" },
    { icon: UtensilsCrossed, label: "Ruang Makan" },
    { icon: UtensilsCrossed, label: "Dapur" },
    { icon: Car, label: "Parkir 4 Mobil & 4 Motor" },
  ];

  return (
    <section id="info" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Informasi Properti
            </h2>
            <Badge className="bg-primary text-primary-foreground text-base px-4 py-1">
              Full Furnished
            </Badge>
          </div>

          {/* Main Specifications */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {specs.map((spec, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <spec.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="text-2xl font-bold text-foreground mb-1">{spec.value}</p>
                  <p className="text-sm text-muted-foreground">{spec.label}</p>
                  {spec.detail && (
                    <p className="text-xs text-primary mt-1 font-medium">{spec.detail}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Room Details */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Ruangan</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {rooms.map((room, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <room.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{room.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;
