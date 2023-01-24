import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  labelValue: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className="text-black flex flex-col justify-evenly bg-green-200/50 w-96 p-5">
      <label className="text-lg uppercase w-full text-start font-semibold text-green-900 ">{props.labelValue}</label>
      <input
        className="outline-none border-2 border-green-500 rounded-md p-1 placeholder:text-green-400"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
