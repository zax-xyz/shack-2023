import Link from "next/link";
import { useEffect, useState } from "react";

interface UnloggedDayProps {
    datePicked: Date
}
const UnloggedDay: React.FC<UnloggedDayProps> = ({ datePicked }) => {
  const [value, setValue] = useState<Date | null>(null);


  return (
    <div className="flex flex-col">
      <div className="self-center my-8 font-bold text-3xl text-center">
        You haven't logged for today
      </div>

      <Link className="self-center m-4" href={`/moodForm?datePicked=${datePicked}`}>
        <button tw="rounded px-3 py-1.5 transition bg-white border border-violet-300 text-gray-900 hover:bg-violet-50">
          Log Your Mood
        </button>
      </Link>
    </div>
  );
};

export default UnloggedDay;
