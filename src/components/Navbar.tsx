import { useAtom } from "jotai";
import datePickedAtom from "~/atoms/datePickedAtom";
import dayjs from "dayjs";
import Link from "next/link";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [datePicked] = useAtom(datePickedAtom);

  return (
    <div className="sticky top-0 p-4 backdrop-blur">
      <div className="flex justify-between rounded bg-gradient-to-r from-purple-100 to-violet-100 px-6 py-2 shadow">
        <Link href="/home">
          <img
            className="h-10"
            src="https://static.thenounproject.com/png/335121-200.png"
            alt="Home"
          />
        </Link>
        <div className="flex items-center gap-4">
          <p>{dayjs(datePicked).format("MMMM")}</p>
          <Link href="/calendar">
            <CalendarDaysIcon className="h-7 w-7" />
            <div className="sr-only">Calendar</div>
          </Link>
          <BellIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
