import { useEffect, useState } from "react";
import Calendar from "~/components/Calendar";

const Day = () => {
  const [value, setValue] = useState<Date | null>(null);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
      <h1 tw="text-2xl my-2">Pick a date</h1>
      <p>Chosen date: {value?.toString()}</p>

      <Calendar view="month" tw="my-4" value={value} onChange={setValue} />
    </>
  );
};

export default Day;
