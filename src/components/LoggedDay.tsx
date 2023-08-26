import Link from "next/link";

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
      <div className="my-8 self-center text-center text-3xl font-bold">
        "{dateInfo[0].message}"
      </div>
      <div className="flex justify-center">
        <div className="flex h-32 w-40 flex-col items-center justify-center rounded-xl bg-gray-200 p-5">
          <div>Mood</div>
          <div className="text-2xl">{moods[Number(dateInfo[0].mood) + 2]}</div>
        </div>
      </div>

      <Link
        className="m-4 self-center"
        href={{
          pathname: "/moodForm",
          query: { datePicked: datePicked.toString() },
        }}
      >
        <button className="w-25 rounded border bg-transparent px-4 py-2">
          Edit
        </button>
      </Link>

      <div>
        <h1 className="px-4 text-xl font-bold">Tasks</h1>
        {dateInfo.map((elem: any, i: number) => {
          return (
            <li key={i} className="px-6">
              {elem.activity}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default LoggedDay;
