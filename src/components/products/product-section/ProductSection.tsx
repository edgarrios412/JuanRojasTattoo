import { HeaderSection, ProductList } from "@/components";
import { IProduct } from "@/interfaces";

interface Props {
  products: IProduct[];
}

export const ProductSection = ({ products }: Props) => {
  return (
    <section className="py-16 px-4 xl:px-0">
      <div className="max-w-screen-xl mx-auto">
        <HeaderSection
          title="Nuestros productos"
          subtitle="Descubra nuestra selección de productos de cuidado posterior y suministros para tatuajes."
        />
        <ProductList products={products} />
      </div>
    </section>
  );
};
