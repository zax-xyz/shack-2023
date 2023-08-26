import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/solid";

interface UnloggedDayProps {
  datePicked: Date;
}

const UnloggedDay: React.FC<UnloggedDayProps> = ({ datePicked }) => {
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
      <div className="mx-8 my-6 self-center text-center text-2xl text-black font-bold">
        You haven't logged for today :(
      </div>

      <div className="mb-4 flex self-center flex-col justify-center items-center w-44 h-44 border-2 border-dashed border-violet-200 rounded-full">
        <div className="text-black font-bold mb-3">Predicted Mood:</div>
        <div className="text-6xl">{moods[0]}</div>
      </div>

      <Link className="self-center m-4 mb-8" href={`/moodForm?datePicked=${datePicked}`}>
        <button tw="rounded-xl px-6 py-3 transition bg-gradient-to-r from-indigo-500/80 to-purple-500/80 border border-violet-300 text-gray-900 hover:bg-violet-50">
          <p className="text-xl text-white font-semibold">Log Your Mood</p>
        </button>
      </Link>

      <div className="drop-shadow">
        <h1 className="px-4 text-xl font-bold bg-gradient-to-r from-purple-200/50 to-violet-200/50 py-2 rounded-sm">Scheduled Events:</h1>
        {/* TODO SCHEDULED EVENTS */}
      </div>
    </div>
  );
};

export default UnloggedDay;
