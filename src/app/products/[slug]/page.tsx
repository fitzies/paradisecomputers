import Button from "@/components/Button";
import { create } from "@/util/actions";
import { createObjectWithModifiedNames, getProducts } from "@/util/lib";
import { cookies } from "next/headers";

const Page = async ({ params }: { params: { slug: string } }) => {
  const products = await getProducts();
  const product = createObjectWithModifiedNames(products)[params.slug];

  const cookieStore = cookies();
  const cart = cookieStore.get("cart")?.value.split(" ") ?? [];

  return (
    <>
      <div className="w-4/5 h-[85vh] mx-auto py-12 flex md:flex-row flex-col items-center">
        <div className="md:w-1/2 w-5/6 px-4">
          {product.Image != "" ? (
            <img src={product.Image} alt={product.Name} />
          ) : null}
        </div>
        <div className="md:w-2/5 w-5/6 h-4/5 flex flex-col items-start p-2 px-4 gap-3 md:mt-0 mt-4">
          <h1 className="font-bold text-3xl">{product.Name}</h1>
          <p className="text-sm italic">Lorem ipsum dolor sit.</p>
          <p>{product.Description}</p>
          <p>R{product.Price}</p>
          <form className="my-4 flex items-center gap-4">
            {/* <input
              type="number"
              className="aspect-square w-1/6 bg-gray-100 outline-none border-none rounded-lg px-1 text-center shadow-sm"
              defaultValue={1}
              name="count"
            /> */}
            <input
              type="hidden"
              name="name" // Set the name for the hidden input field
              value={product.Name.replace(/\s+/g, "-").toLowerCase()} // Set the value to the product's name
            />
            <Button text="Add to cart" action={create} />
          </form>
          {cart.includes(params.slug) ? (
            <div className="bg-blue-200 px-6 w-full text-center text-white font-bold shadow-md py-2 rounded-lg transition-opacity duration-300">
              Added to cart
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Page;
