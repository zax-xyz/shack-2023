import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import Calendar, { type Level } from "~/components/Calendar";

const Day = () => {
  const [value, setValue] = useState<Date | null>(null);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const levels = useMemo(() => {
    const beginning = dayjs().startOf("month").add(9, "day");
    return Object.fromEntries(
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
  }, []);

  return (
    <>
      <h1 tw="text-2xl my-2">Pick a date</h1>
      <p>Chosen date: {value?.toString()}</p>

      <Calendar
        view="month"
        levels={levels}
        tw="my-4"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default Day;
