import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/solid";

interface LoggedDayProps {
  datePicked: Date;
  dateInfo: any;
}

const LoggedDay: React.FC<LoggedDayProps> = ({ datePicked, dateInfo }) => {
  // const moods = [😭, 🙁, 😐, 🙂, 😁]

  const moods = [
    "\u{1F62D}",
    "\u{1F615}",
    "\u{1F610}",
    "\u{1F642}",
    "\u{1F601}",
  ];
  return (
    <div className="flex flex-col">
      <div className="self-center mt-4">Words of Affirmation:</div>
      <div className="mb-8 self-center text-center text-4xl font-bold text-indigo-500">
        "{dateInfo[0].message}"
      </div>
      <div className="flex self-center flex-col justify-center items-center w-44 h-44 bg-gradient-to-r from-indigo-400/80 to-purple-400/80 rounded-full">
        <div className="text-white font-bold mb-3">Today's Mood:</div>
        <div className="text-6xl">{moods[Number(dateInfo[0].mood) + 2]}</div>
      </div>

      <Link
        className="mb-4 mx-4 self-end"
        href={{
          pathname: "/moodForm",
          query: { datePicked: datePicked.toString() },
        }}
      >
        <button tw="flex items-center justify-center rounded h-12 w-12 mb-7 transition bg-white border border-violet-300 text-gray-900 hover:bg-violet-50 rounded-full">
          <PencilIcon className="h-6"/>
        </button>
      </Link>

      <div className="drop-shadow">
        <h1 className="px-4 text-xl font-bold bg-gradient-to-r from-purple-200/50 to-violet-200/50 py-2 rounded-t-md">Events that caused this Mood:</h1>
        {dateInfo.map((elem: any, i: number) => {
          return (
            <p key={i} className="px-6 py-4 bg-white rounded-sm">
              {elem.activity}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default LoggedDay;
