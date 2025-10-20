import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apakah Rumah Selalu dijaga dan dibersihkan?",
      answer:
        "Ya, pemilik sewa rumah tinggal di sebelah rumah yang disewakan, sehingga sudah dipastikan rumah selalu dijaga dan dibersihkan setiap pagi oleh pemilik.",
    },
    {
      question: "Apakah hewan peliharaan diperbolehkan?",
      answer:
        "Hewan peliharaan kecil seperti kucing atau anjing kecil diperbolehkan dengan persetujuan pemilik. Biaya tambahan untuk pembersihan mungkin berlaku.",
    },
    {
      question: "Berapa lama kontrak sewa minimum?",
      answer:
        "Kontrak sewa minimum adalah 1 bulan untuk sewa bulanan. Untuk sewa tahunan, kontrak minimum adalah 1 tahun dengan opsi perpanjangan.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Pertanyaan Umum
          </h2>

          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
