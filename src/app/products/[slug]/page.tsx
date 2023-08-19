import { createObjectWithModifiedNames, getProducts } from "@/util/sheet";

const Page = async ({ params }: { params: { slug: string } }) => {
  const products = await getProducts();

  const product = createObjectWithModifiedNames(products)[params.slug];

  return <>{product.Name}</>;
};

export default Page;
