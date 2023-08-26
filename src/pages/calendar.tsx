import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import Calendar, { type Level } from "~/components/Calendar";
import { formatDate } from "~/utils/dates";

const beginning = dayjs().startOf("month").add(9, "day");
const levels = Object.fromEntries(
  Array(10)
    .fill(null)
    .map(
      (_, i) =>
        [
          beginning
            .date(beginning.date() + i)
            .toDate()
            .toString(),
          1 + Math.floor(Math.random() * 5),
        ] as [string, Level]
    )
);

const events = [
  {
    id: 0,
    name: "Epic Event 😎",
    startDate: dayjs().hour(15).minute(0),
    endDate: dayjs().hour(17).minute(0),
  },
  {
    id: 1,
    name: "Doomed Event 💀",
    startDate: dayjs().hour(17).minute(0),
    endDate: dayjs().hour(19).minute(0),
  },
  {
    id: 2,
    name: "Extra Doomed Event 💀💀💀",
    startDate: dayjs().hour(19).minute(0),
    endDate: dayjs().hour(21).minute(0),
  },
];

const Day = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <>
      <h1 tw="text-3xl my-2">Monthly View</h1>
      <p>Chosen date: {date ? formatDate(date) : "No date chosen"}</p>

      <Calendar
        view="month"
        levels={levels}
        tw="my-4"
        value={date}
        onChange={setDate}
      />

      <div tw="max-w-2xl mx-auto bg-white rounded-md shadow">
        <div tw="bg-gray-100 py-2 px-3">
          <h1 tw="font-semibold">Events</h1>
        </div>
        <div tw="p-2">
          <ul tw="flex flex-col gap-1">
            {events.map((event) => (
              <li key={event.id} tw="px-2 py-1.5 rounded hover:bg-purple-50">
                <h2 tw="font-medium">{event.name}</h2>
                <div tw="font-light text-gray-800">
                  {event.startDate.format("HH:MM")} -{" "}
                  {event.endDate.format("HH:MM")}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Day;
