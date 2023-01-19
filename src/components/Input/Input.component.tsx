import { ChangeEvent, useState } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  labelValue: string;
}

interface InputObject {
  name: string;
  phone: string;
}

export default function Input(props: InputProps) {

  const [value, setValue] = useState<InputObject>({
    name: "",
    phone: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue({ name: event.target.value, phone: event.target.value });
  }

  console.log(value);

  return (
    <div className="text-sky-600 flex flex-col justify-evenly bg-gray-200 w-64 p-5">
      <label>{props.labelValue}</label>
      <input
        className="outline-none border-2 border-gray-300 rounded-md p-1"
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        
      />
    </div>
  );
}
