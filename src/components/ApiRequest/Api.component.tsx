import { times } from "../../../public/services/timesApi";

export default function Request() {
  return (
    <div>
      {times.map((name: any) => {
        return (
          <div
            key={name.id}
            className="m-2 p-1 bg-sky-200 w-56 h-36 justify-evenly items-center flex flex-col"
          >
            <p className="bg-sky-700 text-center w-full text-white">
              Time: {name.time}
            </p>

            <p className="bg-sky-900 text-white text-center w-full">
              <strong>Cidade: </strong>
              {name.city}
            </p>
          </div>
        );
      })}
    </div>
  );
}
