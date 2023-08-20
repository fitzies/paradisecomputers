import Button from "@/components/Button";
import Table from "@/components/Table";
import { calculateCartItems } from "@/util/lib";
import { getProducts } from "@/util/lib";
import { cookies } from "next/headers";

const Page = async ({ params }: { params: { slug: string } }) => {
  const cookieStore = cookies();
  const cart = cookieStore.get("cart")?.value.split(" ") ?? [];

  const products = await getProducts();

  const cartItems = calculateCartItems(cart, products);

  const fields = ["Product", "Price", "Quantity", "Total"];
  const cartItemsArray = cartItems.map((item) => [
    item.Product,
    "R" + item.Price,
    item.Quantity,
    "R" + item.Total,
  ]);

  const subTotal = cartItems.reduce((total, item) => total + item.Total, 0);
  const total = subTotal;

  return (
    <div className="w-screen flex flex-col md:px-20 px-12 md:py-12 py-8 gap-2">
      <div className="md:w-5/6 w-full mx-auto my-4">
        <Table fields={fields} data={cartItemsArray} />
        <div className="md:w-1/4 w-full my-4 flex flex-col gap-2 px-8 py-4 rounded-lg">
          <h2 className="font-bold text-2xl">TOTAL</h2>
          <p className="mb-4 text-md">Sub-total: {"R" + subTotal.toFixed(2)}</p>
          <Button text="Proceed to checkout" reverse />
        </div>
      </div>
    </div>
  );
};

export default Page;
