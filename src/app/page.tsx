import { Metadata } from "next";
import {
  // ArtistSection,
  FAQSection,
  FinalCTASection,
  HeroSection,
  LocationSection,
  PriceSection,
  ProductSection,
  PromotionSection,
  ServiceSection,
  TattooSection,
  BackToTop,
} from "@/components";
import {
  getArtists,
  getFaqs,
  getPrices,
  getProducts,
  getServices,
  getRandomTattoos,
} from "@/lib/api";

export const metadata: Metadata = {
  title: "Juan Rojas - Tatuador Zipaquirá",
  description:
    "Mi nombre es Juan Rojas (@lykahios en Instagram), soy un tatuador profesional ubicado en Zipaquirá, Cundinamarca. Hazte tu primer tatuaje con descuento!",
  keywords:
    "Juan Rojas, estudio tatto zipaquira, tatuador zipaquira, tatuajes profesional zipaquira, tatuador profesional zipa, lykahios",
  openGraph: {
    title: "Juan Rojas - Tatuador Zipaquirá",
    description:
      "Mi nombre es Juan Rojas (@lykahios en Instagram), soy un tatuador profesional ubicado en Zipaquirá, Cundinamarca. Hazte tu primer tatuaje con descuento!",
    url: "https://juanrojastattoo.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1727889010/Atlanta%20Ink%20API/atlanta-ink-seo.webp",
        width: 1280,
        height: 720,
        alt: "Juan Rojas",
      },
    ],
    siteName: "Juan Rojas - Tatuador Zipaquirá",
  },
};

export default async function HomePage() {
  // const [services, tattoos, artists, prices, productsData, faqs] =
  //   await Promise.all([
  //     getServices(),
  //     getRandomTattoos(),
  //     getArtists(),
  //     getPrices({ is_featured: true }),
  //     getProducts(),
  //     getFaqs(),
  //   ]);

  // const { results: products } = productsData;
  const products : any = [{name:"Hola",slug:"a", brand:"Hola",id:1}]

  return (
    <main>
      <HeroSection />
      <PromotionSection />
      {/* <ServiceSection services={services} /> */}
      {/* <TattooSection tattoos={tattoos} /> */}
      {/* <ArtistSection artists={artists} /> */}
      {/* <PriceSection prices={prices} /> */}
      <ProductSection products={products} />
      {/* <FAQSection faqs={faqs} /> */}
      <LocationSection />
      <FinalCTASection />
      <BackToTop />
    </main>
  );
}
