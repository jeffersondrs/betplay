import "./styles.scss";
import { useState } from "react";

type ChoiceTimesProps = {
  timecasa: string;
  timevisitante: string;
  empate: string;
};

export default function ChoiceTimes(props: ChoiceTimesProps) {
  const [choice, setChoice] = useState<string>("");

  const handleChoice = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    setChoice(e.currentTarget.innerText);
  };
  console.log(choice);

  return (
    <>
      <div className="flex flex-row w-96 justify-evenly items-center my-2 parent">
        <div onClick={handleChoice} className="button mx-1">
          {props.timecasa}
        </div>
        <div onClick={handleChoice} className="button mx-1">
          {props.empate}
        </div>
        <div onClick={handleChoice} className="button mx-1">
          {props.timevisitante}
        </div>
      </div>
    </>
  );
}
