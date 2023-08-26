
import Link from "next/link";
import { useEffect, useState } from "react";
import WeekdayPicker from "~/components/WeekdayPicker";
import { api } from "~/utils/api";
import { useAtom } from "jotai";
import { datesInfoAtom } from ".";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [datePicked, setDatePicked] = useState<Date>(new Date());
  const [datesInfo, setDatesInfo] = useAtom(datesInfoAtom);

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    datesInfo
  }, [])

  return (
    <div className="flex flex-col ">
      <div className='flex justify-between bg-gray-100 py-2 px-6'>
        <img className='h-10' src="https://static.thenounproject.com/png/335121-200.png"/>
        <div className='flex gap-4 items-center'>
          <p>{monthNames[datePicked?.getMonth()]}</p>
          <img className='h-7' src='https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-calendar-icon-png-image_3782243.jpg'/>
          <img className='h-5' src='https://cdn-icons-png.flaticon.com/512/3119/3119338.png' />
        </div>
      </div>

      <div className="py-4 px-6">
        <WeekdayPicker datePicked={datePicked} setDatePicked={setDatePicked}/>
      </div>

      <div className="self-center my-8 font-bold text-3xl text-center">
        "Words of affirmation"
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-200 p-5 h-32 flex flex-col justify-center items-center rounded-xl">
          <div>You haven't logged in</div>
          <div className="text-2xl">4 days</div>
        </div>
      </div>

      <Link className="self-center m-4" href="/moodForm">
        <button className="w-25 bg-transparent py-2 px-4 border rounded">
          LOG TODAY
        </button>
      </Link>

    </div>
  );
}
