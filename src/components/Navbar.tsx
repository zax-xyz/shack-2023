import { useAtom } from "jotai";
import datePickedAtom from "~/atoms/datePickedAtom";
import dayjs from "dayjs";

const Navbar = () => {
  const [datePicked] = useAtom(datePickedAtom);

  return (
    <div className="flex justify-between bg-gray-100 px-6 py-2">
      <img
        className="h-10"
        src="https://static.thenounproject.com/png/335121-200.png"
      />
      <div className="flex items-center gap-4">
        <p>{dayjs(datePicked).format("MMMM")}</p>
        <img
          className="h-7"
          src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-calendar-icon-png-image_3782243.jpg"
        />
        <img
          className="h-5"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
        />
      </div>
    </div>
  );
};

export default Navbar;
