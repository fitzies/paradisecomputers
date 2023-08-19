import ProductView from "@/components/ProductView";
import { getProducts } from "@/util/sheet";

const Page = async ({ params }: { params: { slug: string } }) => {
  try {
    const products = await getProducts();
    return (
      <div className="w-screen flex flex-col lg:px-20 px-12 py-12 gap-2">
        <h1>Products</h1>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-2 w-full">
          {products.map((product) => {
            return (
              <ProductView
                productTitle={product.Name}
                productText={product.Description}
                price={product.Price}
                image={product.Image}
                key={product.Name}
              />
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    return <>An error occurred.</>;
  }
};

export default Page;
