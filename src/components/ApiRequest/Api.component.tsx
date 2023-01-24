import { useState, useEffect } from "react";
interface BetUser {
  _id: number;
  name: string;
  phone: number;
  chavePix: string;
}

type BetUsers = BetUser[];

export default function Request() {
  const [data, setData] = useState<BetUsers>();

  useEffect(() => {
    fetch("https://betplay.onrender.com/api")
      .then((response) => response.json())
      .then((json) => setData(json.data.betUsers));
  }, [data]);

  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {data?.map((name) => {
        return (
          <div
            key={name._id}
            className="m-2 p-1 bg-sky-200 w-56 h-36 justify-evenly items-center flex flex-col"
          >
            <p className="bg-green-700 text-center w-40 text-white">
              {name.name}
            </p>
            <p className="bg-green-800 text-white text-center w-40">
              {name.phone}
            </p>
            <p className="bg-green-900 text-white text-center w-40">
              {name.chavePix}
            </p>
          </div>
        );
      })}
    </div>
  );
}
