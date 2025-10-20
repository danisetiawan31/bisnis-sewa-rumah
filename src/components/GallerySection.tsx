import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-house.jpg";
import livingImage from "@/assets/gallery-living.jpg";
import bedroomImage from "@/assets/gallery-bedroom.jpg";
import kitchenImage from "@/assets/gallery-kitchen.jpg";
import bathroomImage from "@/assets/gallery-bathroom.jpg";

const GallerySection = () => {
  const images = [
    { src: heroImage, alt: "Tampak depan rumah", caption: "Eksterior" },
    { src: livingImage, alt: "Ruang tamu", caption: "Ruang Tamu" },
    { src: bedroomImage, alt: "Kamar tidur", caption: "Kamar Tidur" },
    { src: kitchenImage, alt: "Dapur", caption: "Dapur" },
    { src: bathroomImage, alt: "Kamar mandi", caption: "Kamar Mandi" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Galeri Foto
          </h2>

          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-white text-lg font-semibold">{image.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <div
                key={index}
                className="h-2 w-2 rounded-full bg-primary/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
