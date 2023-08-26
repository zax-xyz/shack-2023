import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import { useAtom } from "jotai";
import LoggedDay from "~/components/LoggedDay";
import UnloggedDay from "~/components/UnloggedDay";
import Calendar from "~/components/Calendar";
import datesInfoAtom from "~/atoms/datesInfoAtom";
import datePickedAtom from "~/atoms/datePickedAtom";
import { ToastType } from "~/components/ToastNotifs";
import { toast } from "react-hot-toast";
import ToastNotifs from "~/components/ToastNotifs";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [datePicked, setDatePicked] = useAtom(datePickedAtom);
  const [datesInfo, setDatesInfo] = useAtom(datesInfoAtom);
  const [dateInfo, setDateInfo] = useState(null);
  const [isNotif, setIsNotif] = useState(false);

  useEffect(() => {
    initDateInfo();
  }, [datePicked]);

  // Grabs data associated with persisted state of whether notification has appeared already once
  useEffect(() => {
    const data = window.localStorage.getItem("notification_state");
    if (data === "true") {
      setIsNotif(true);
    }
  }, []);

  // For pushing notification only once when user first opens home page
  // Persist state by storing in localstorage
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isNotif === false) {
        // This will run after 3 seconds!
        pushToast("Gentle reminder to log your day!", "");
        setIsNotif(true);
        window.localStorage.setItem("notification_state", JSON.stringify(true));
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isNotif]);

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
  };

  // If given date is equal to 'datePicked'
  const isEqualDate = (d1: Date) => {
    return (
      d1.getDate() === datePicked.getDate() &&
      d1.getMonth() === datePicked.getMonth() &&
      d1.getFullYear() === datePicked.getFullYear()
    );
  };

  const pushToast = (title: string, description: string, type?: ToastType) => {
    toast.custom((t) => (
      <ToastNotifs t={t} title={title} description={description} type={type} />
    ));
  };

  return (
    <div className="flex flex-col ">
      <div className="px-6 py-4">
        <Calendar
          view="week"
          datePicked={datePicked}
          setDatePicked={setDatePicked}
        />
      </div>

      {dateInfo ? (
        <LoggedDay datePicked={datePicked} dateInfo={dateInfo} />
      ) : (
        <UnloggedDay datePicked={datePicked}/>
      )}
    </div>
  );
}
