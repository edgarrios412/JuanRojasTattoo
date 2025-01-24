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
  title: "Juan Rojas - Tatuador",
  description:
    "Soy Juan Rojas, tatuador profesional en Zipaquirá, sigueme en instagram @lykahios",
  keywords:
    "atlanta ink, tattoo studio, custom tattoos, tattoo designs, tattoo artists, atlanta",
  openGraph: {
    title: "Atlanta Ink - Tattoo Studio",
    description:
      "Soy Juan Rojas, tatuador profesional en Zipaquirá, sigueme en instagram @lykahios",
    url: "https://atlanta-ink-studio.vercel.app/",
    images: [
      {
        url: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1727889010/Atlanta%20Ink%20API/atlanta-ink-seo.webp",
        width: 1280,
        height: 720,
        alt: "Atlanta Ink Seo",
      },
    ],
    siteName: "Atlanta Ink",
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
