import Link from "next/link";

const Button = (props: {
  text: string;
  children?: any;
  reverse?: boolean;
  href?: string;
  action?: any;
}) => {
  const commonStyles =
    "font-semibold p-2 rounded-lg px-6 text-md flex gap-2 items-center levitate shadow-md lg:text-md text-sm text-center justify-center";

  if (props.action) {
    return (
      <button
        formAction={props.action}
        className={`bg-gray-200 ${commonStyles}`}
      >
        {props.text}
        {props.children}
      </button>
    );
  }

  if (props.href) {
    return (
      <Link href={props.href}>
        <div
          className={`bg-gray-200 ${
            props.reverse ? "bg-black text-white" : ""
          } ${commonStyles}`}
        >
          {props.text}
          {props.children}
        </div>
      </Link>
    );
  }

  return (
    <button
      className={`bg-${
        props.reverse ? "black text-white" : "gray-200"
      } ${commonStyles}`}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
