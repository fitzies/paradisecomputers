import Button from "@/components/Button";
import ProductView from "@/components/ProductView";
import { getProducts } from "@/util/lib";
import { PiArrowBendDownRightBold, PiDiceFourBold } from "react-icons/pi";
import computer from "../assets/preview.jpg";
import Image from "next/image";

const Page = async ({ params }: { params: { slug: string } }) => {
  const products = await getProducts();

  return (
    <>
      <div className="w-screen flex p-16 pb-0 ">
        <div className="lg:w-1/2 w-full flex flex-col gap-3 md:pl-8">
          <p className="pl-1">Lorem ipsum dolor sit.</p>
          <h1 className="font-extrabold lg:text-7xl text-5xl">
            Experience digital delight
          </h1>
          <p className="py-2">
            Unlock boundless tech possibilities with Paradise Computers.
            Elevating South Africa`s digital landscape through innovative
            solutions and exceptional service.
          </p>
          <div className="flex items-center gap-4">
            <Button text="Buy Now" reverse>
              <PiArrowBendDownRightBold className="-rotate-45 text-lg" />
            </Button>
            <Button text="See More" href="/shop">
              <PiDiceFourBold className="text-lg" />
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-[65%] aspect-square lg:flex hidden">
            <Image src={computer} alt="Computer" className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-screen flex flex-col p-16 gap-3">
        <h2 className="font-bold text-lg">Other products:</h2>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-2 w-full">
          {products.slice(0, 3).map((product) => {
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
    </>
  );
};

export default Page;
