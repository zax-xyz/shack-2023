import Link from "next/link";

interface LoggedDayProps {
  datePicked: Date,
  dateInfo: any,
}

const LoggedDay: React.FC<LoggedDayProps> = ({ datePicked, dateInfo}) => {
  // const moods = [😭, 🙁, 😐, 🙂, 😁]
  const moods = ['\u{1F62D}', '\u{1F615}', '\u{1F610}', '\u{1F642}', '\u{1F601}']
  return (
    <div className="flex flex-col">
      <div className="self-center my-8 font-bold text-3xl text-center">
        "{dateInfo[0].message}"
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-200 w-40 p-5 h-32 flex flex-col justify-center items-center rounded-xl">
          <div>Mood</div>
          <div className="text-2xl">{moods[dateInfo[0].mood + 2]}</div>
        </div>
      </div>

      <Link className="self-center m-4" href={`/moodForm?datePicked=${datePicked}`}>
        <button className="w-25 bg-transparent py-2 px-4 border rounded">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default LoggedDay;
