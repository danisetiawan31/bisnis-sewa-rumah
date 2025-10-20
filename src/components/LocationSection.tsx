import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Lokasi Strategis
          </h2>

          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-0">
              {/* Google Maps Embed */}
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d250.6158577211223!2d103.40286742408848!3d-1.1043046518746977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1760948154854!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Rumah Pematang Lumut"
                />
              </div>

              {/* Location Details */}
              <div className="p-6 md:p-8 bg-white">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Depan Betara Las, Rumah Cat Oren, Pematang Lumut
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Pematang Lumut, Kec. Betara, Kabupaten Tanjung Jabung
                      Barat, Jambi
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Lokasi strategis dengan akses mudah ke berbagai fasilitas.
                      Lingkungan aman dan nyaman untuk keluarga.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      1 menit ke Pasar
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      1 menit ke Indomaret
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      5 menit ke Petro China
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
