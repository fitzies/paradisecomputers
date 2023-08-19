const Button = (props: { text: string; children?: any; reverse?: boolean }) => {
  if (props.reverse) {
    return (
      <div className="bg-black text-white font-semibold p-2 rounded-lg px-6 text-md flex gap-2 items-center levitate shadow-md lg:text-md text-sm">
        {props.text}
        {props.children}
      </div>
    );
  }

  return (
    <div className="bg-gray-200 font-semibold p-2 rounded-lg px-6 text-md flex gap-2 items-center levitate shadow-md lg:text-md text-sm">
      {props.text}
      {props.children}
    </div>
  );
};

export default Button;
