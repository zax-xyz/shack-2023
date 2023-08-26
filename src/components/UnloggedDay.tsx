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
        <button className="w-25 bg-transparent py-2 px-4 border rounded">
          Log Now
        </button>
      </Link>
    </div>
  );
};

export default UnloggedDay;
