
import Link from "next/link";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const handleLogToday = () => {

  }

  return (
    <div className="flex flex-col ">
      <div className='flex justify-between bg-gray-100 py-2 px-6'>
        <img className='h-10' src="https://static.thenounproject.com/png/335121-200.png"/>
        <div className='flex gap-4 items-center'>
          <p>August</p>
          <img className='h-7' src='https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-calendar-icon-png-image_3782243.jpg'/>
          <img className='h-5' src='https://cdn-icons-png.flaticon.com/512/3119/3119338.png' />
        </div>
      </div>

      <div className="py-4 px-6">
        <img src='https://i.imgur.com/BaNEgIS.png?1'/>
      </div>

      <div className="flex justify-center">
        <div className="bg-gray-200 p-5 h-32 flex flex-col justify-center items-center rounded-xl">
          <div>You haven't logged in</div>
          <div className="text-2xl">4 days</div>
        </div>
      </div>

      <Link className="self-center m-4" href="/moodForm">
        <button onClick={handleLogToday} className="w-25 bg-transparent text-red-700 py-2 px-4 border border-red-500 rounded">
          LOG TODAY
        </button>
      </Link>

      <div className="self-center m-10 font-bold text-3xl text-center">
        "Previous words of affirmation"
      </div>
    </div>
  );
}
