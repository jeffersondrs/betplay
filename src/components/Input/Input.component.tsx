import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  labelValue: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  maxlength?: number;
}

export default function Input(props: InputProps) {
  return (
    <div className="text-black flex flex-col justify-evenly w-64 p-5">
      <label className="text-sm uppercase w-full text-start font-semibold text-green-900 ">
        {props.labelValue}
      </label>
      <input
        className="input-field outline-none border-2 border-green-500 rounded-sm p-1 placeholder:text-green-400"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        maxLength={props.maxlength}
      />
    </div>
  );
}
