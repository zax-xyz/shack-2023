
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import { useAtom } from "jotai";
import LoggedDay from "~/components/LoggedDay";
import UnloggedDay from "~/components/UnloggedDay";
import Calendar from "~/components/Calendar";
import datesInfoAtom from "~/atoms/datesInfoAtom";
import datePickedAtom from "~/atoms/datePickedAtom";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [datePicked, setDatePicked] = useAtom(datePickedAtom);
  const [datesInfo, setDatesInfo] = useAtom(datesInfoAtom);
  const [dateInfo, setDateInfo] = useState(null);

  useEffect(() => {
    initDateInfo();
  }, [datePicked])

  // Finds date inside datesInfo and returns it's corresponding array of information
  const initDateInfo = () => {
    for (const dateInfo of datesInfo) {
      const d1 = new Date(Object.keys(dateInfo)[0]!);
      if (isEqualDate(d1)) {
        setDateInfo(Object.values(dateInfo)[0]);
        return;
      }
    }
    setDateInfo(null);
  }

  // If given date is equal to 'datePicked'
  const isEqualDate = (d1: Date) => {
   return d1.getDate() === datePicked.getDate() &&
          d1.getMonth() === datePicked.getMonth() &&
          d1.getFullYear() === datePicked.getFullYear();
  }

  return (
    <div className="flex flex-col ">
      <div className="py-4 px-6">
        <Calendar view="week" datePicked={datePicked} setDatePicked={setDatePicked}/>
      </div>

      {dateInfo ? <LoggedDay datePicked={datePicked} dateInfo={dateInfo}/> : <UnloggedDay datePicked={datePicked}/>}
  
    </div>
  );
}
