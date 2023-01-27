import "./match.styles.scss";

type objeto = {
    timecasa: string;
    timefora: string;
    escudocasa: string;
    escudofora: string;
};

export default function Match(props: objeto) {

    const { timecasa, escudocasa, timefora, escudofora } = props;

  return (
    <div className="flex flex-row w-80 justify-between items-center my-3 bg-emerald-900/40 h-6 rounded-xl">
      <div className="timecasa flex flex-row text-white w-48 justify-between hover:bg-yellow-500 rounded-xl">
        <img
          className="rounded-md w-8 h-8"
          src={escudocasa}
        />
        <h1 className="w-full">{timecasa}</h1>
      </div>
      <div className="losango bg-gray-100 rounded-xl w-10 h-6 flex items-center justify-center m-1">
        <span className="empate text-xs">VS</span>
      </div>
      <div className="timefora flex flex-row w-48 text-white justify-between hover:bg-red-500 rounded-xl">
        <h1 className="w-full">{timefora}</h1>
        <img
          className="rounded-md w-8 h-8"
          src={escudofora}
        />
      </div>
    </div>
  );
}
