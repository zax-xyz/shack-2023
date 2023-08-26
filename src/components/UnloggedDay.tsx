import Link from "next/link";
import { useEffect, useState } from "react";

interface UnloggedDayProps {
    datePicked: Date
}
const UnloggedDay: React.FC<UnloggedDayProps> = ({ datePicked }) => {
  const [value, setValue] = useState<Date | null>(null);


  return (
    <div className="flex flex-col">
      <div className="self-center mt-8 mb-3 text-2xl text-center text-indigo-500 mx-10">
        You haven't logged for today :(
      </div>

      <Link className="self-center m-4" href={`/moodForm?datePicked=${datePicked}`}>
        <button tw="bg-gradient-to-r from-indigo-400/80 to-purple-400/80 rounded-full px-6 py-3 transition bg-white border border-violet-300 text-gray-900 hover:bg-violet-50">
          <p className="text-2xl text-white font-semibold">Log Your Mood</p>
        </button>
      </Link>
    </div>
  );
};

export default UnloggedDay;
