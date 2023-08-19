import Link from "next/link";
import {
  PiButterflyFill,
  PiShoppingCartSimpleBold,
  PiMagnifyingGlassBold,
  PiUserBold,
} from "react-icons/pi";
import Button from "./Button";

const Nav = () => {
  const items = ["Shop", "Upgrades", "Contact"];

  return (
    <div className="w-screen flex py-5 px-12 justify-between">
      <div className="flex gap-12 text-sm w-1/3 justify-start items-center">
        {/* Display "Shop" link only on mobile */}
        <Link href={"/shop"} key="Shop">
          Shop
        </Link>
        {items.slice(1).map((item) => {
          let href = "/" + item.toLowerCase();
          return (
            <Link href={href} key={item} className="md:block hidden">
              {item}
            </Link>
          );
        })}
      </div>
      <Link
        href={"/"}
        className="font-bold text-xl lg:flex hidden items-center gap-2 w-1/3 justify-center"
      >
        <PiButterflyFill className="text-2xl text-blue-300 -rotate-12" />
        PARADISE
      </Link>
      <div className="flex items-center gap-4 w-1/3 justify-end">
        <Link href={"/search"}>
          <PiMagnifyingGlassBold className="text-lg cursor-pointer" />
        </Link>
        <Link href={"/cart"} className="bg-blue-300 p-2 rounded-full levitate">
          <PiShoppingCartSimpleBold className="text-lg text-white" />
        </Link>
        {/* <Button text="Account">
          <PiUserBold className="md:block hidden" />
        </Button> */}
      </div>
    </div>
  );
};

export default Nav;
