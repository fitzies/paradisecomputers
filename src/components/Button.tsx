import Link from "next/link";

const Button = (props: {
  text: string;
  children?: any;
  reverse?: boolean;
  href?: string;
}) => {
  if (props.reverse) {
    return (
      <Link
        href={props.href ? props.href : "/"}
        className="bg-black text-white font-semibold p-2 rounded-lg px-6 text-md flex gap-2 items-center levitate shadow-md lg:text-md text-sm"
      >
        {props.text}
        {props.children}
      </Link>
    );
  }

  return (
    <Link
      href={props.href ? props.href : "/"}
      className="bg-gray-200 font-semibold p-2 rounded-lg px-6 text-md flex gap-2 items-center levitate shadow-md lg:text-md text-sm"
    >
      {props.text}
      {props.children}
    </Link>
  );
};

export default Button;
