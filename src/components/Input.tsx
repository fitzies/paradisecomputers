const Input = (props: {
  type: "text" | "number";
  name: string;
  placeholder: string;
  value?: string;
}) => {
  return (
    <div className="flex flex-col my-2">
      <p className="px-2 py-1">{props.name}</p>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="px-4 py-2 rounded-lg outline-none bg-gray-100 shadow-sm"
        value={props.value}
      />
    </div>
  );
};

export default Input;
