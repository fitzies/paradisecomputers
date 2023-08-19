import Button from "@/components/Button";
import ProductView from "@/components/ProductView";
import { getProducts } from "@/util/sheet";
import { PiArrowBendDownRightBold, PiDiceFourBold } from "react-icons/pi";

const Page = async ({ params }: { params: { slug: string } }) => {
  const products = await getProducts();

  return (
    <>
      <div className="w-screen flex p-16 pb-0">
        <div className="w-1/2 flex flex-col gap-3 ">
          <p className="pl-1">Lorem ipsum dolor sit.</p>
          <h1 className="font-extrabold text-7xl">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sunt
            vel non temporibus laborum nesciunt itaque aspernatur dolorem rem
            consequatur!
          </p>
          <div className="flex items-center gap-4">
            <Button text="Buy Now" reverse>
              <PiArrowBendDownRightBold className="-rotate-45 text-lg" />
            </Button>
            <Button text="See More">
              <PiDiceFourBold className="text-lg" />
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-[60%] aspect-square bg-blue-200"></div>
        </div>
      </div>
      <div className="w-screen flex flex-col p-16 gap-3">
        <h2 className="font-bold text-lg">Other products:</h2>
        <div className="grid grid-cols-3 gap-2 w-full">
          {products.slice(0, 3).map((product) => {
            return (
              <ProductView
                productTitle={product.Name}
                productText={product.Description}
                price={product.Price}
                image={product.Image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
