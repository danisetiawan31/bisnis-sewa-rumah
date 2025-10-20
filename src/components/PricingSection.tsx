import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const terms = [
    "DP minimal 50%",
    "Listrik bayar sendiri",
    "Air dari sumur pribadi (gratis)",
    "Full furnished siap huni",
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Harga & Syarat Sewa
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pilihan sewa yang fleksibel dengan syarat yang mudah
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Yearly Pricing */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0">
                <Badge className="rounded-none rounded-bl-lg bg-primary">
                  Hemat!
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <p className="text-lg font-medium text-muted-foreground mb-2">
                  Sewa Tahunan
                </p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">
                    Rp 35 jt
                  </span>
                  <span className="text-muted-foreground ml-2">/tahun</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Setara Rp 2.910.000/bulan
                </p>
              </CardContent>
            </Card>

            {/* Monthly Pricing */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-8 text-center">
                <p className="text-lg font-medium text-muted-foreground mb-2">
                  Sewa Bulanan
                </p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">
                    Rp 3 jt
                  </span>
                  <span className="text-muted-foreground ml-2">/bulan</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pembayaran lebih fleksibel
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Terms */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground text-center">
                Syarat & Ketentuan
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {terms.map((term, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-foreground">{term}</p>
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

export default PricingSection;
