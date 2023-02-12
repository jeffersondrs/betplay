import "./styles.scss";
import { useState, useRef, useEffect } from "react";

type ChoiceTimesProps = {
  id: number;
  timecasa: string;
  timevisitante: string;
  empate: string;
};

var aposta: string[] = [];

export default function ChoiceTimes(props: ChoiceTimesProps) {
  const casa = useRef<HTMLDivElement>(null);
  const visitante = useRef<HTMLDivElement>(null);
  const empate = useRef<HTMLDivElement>(null);

  const [choice, setChoice] = useState<string>("");

  const handleChoice = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    setChoice(target.innerText);
  };

  useEffect(() => {
    if (choice !== "") {
      choice === props.timecasa
        ? casa.current?.classList.add("active")
        : casa.current?.classList.remove("active");
      choice === props.timevisitante
        ? visitante.current?.classList.add("active")
        : visitante.current?.classList.remove("active");
      choice === props.empate
        ? empate.current?.classList.add("active")
        : empate.current?.classList.remove("active");
    }
  }, [choice]);

  useEffect(() => {
    if (choice !== "") {
      aposta.push(choice);
    }
  }, [choice]);

  console.log(aposta);

  return (
    <>
      <div
        className="group flex flex-row w-96 justify-evenly items-center my-2 parent"
        key={props.id}
      >
        <div ref={casa} onClick={handleChoice} className={`button mx-1`}>
          {props.timecasa}
        </div>
        <div ref={empate} onClick={handleChoice} className={`button mx-1`}>
          {props.empate}
        </div>
        <div ref={visitante} onClick={handleChoice} className={`button mx-1`}>
          {props.timevisitante}
        </div>
      </div>
    </>
  );
}
