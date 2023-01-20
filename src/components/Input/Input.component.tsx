import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  labelValue: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className="text-sky-600 flex flex-col justify-evenly bg-gray-200 w-64 p-5">
      <label>{props.labelValue}</label>
      <input
        className="outline-none border-2 border-gray-300 rounded-md p-1"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
