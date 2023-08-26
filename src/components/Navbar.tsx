import { useAtom } from "jotai";
import datePickedAtom from "~/atoms/datePickedAtom";
import logo from "~/assets/logo.png";
import Link from "next/link";
import { CalendarDaysIcon, HomeIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import NotifsPopover from "./NotifsPopover";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const [datePicked] = useAtom(datePickedAtom);
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <div className="sticky top-0 rounded bg-gradient-to-r from-purple-200/50 to-violet-200/50 px-6 py-2 shadow backdrop-blur">
      <div className="mx-auto flex max-w-5xl justify-between">
        <Link href="/home">
          <div className="flex flex-row items-center gap-2">
            <Image className="h-10 w-10" src={logo} alt="Home" />
            <p className="text-2xl font-semibold">Thrive</p>
          </div>
        </Link>
        <div className="flex items-center gap-4">
        <NotifsPopover />
        


        <Popover placement="bottom-end" isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <button className="flex items-center justify-center" onClick={onToggle}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          bg="white"
          color="black"
          position="sticky"
          tw="mx-auto max-w-xl min-w-48 rounded-md bg-white shadow outline-none focus-visible:(ring ring-violet-400/50)"
        >
          <PopoverArrow />
          <PopoverBody className="pt-4 px-3">
            <div className="mb-3" onClick={onClose} >
              <Link href="/home" className="flex items-center gap-2">
                <HomeIcon className="h-7 w-7" />
                <div>Home</div>
              </Link>
            </div>
            <div className="mb-3" onClick={onClose}>
              <Link href="/calendar" className="flex items-center gap-2">
                <CalendarDaysIcon className="h-7 w-7" />
                <div>Calendar</div>
              </Link>
            </div>
            <div className="mb-3" onClick={onClose}>
              <Link href="/" className="flex items-center gap-2">
                <UserIcon className="h-7 w-7" />
                <div>Logout</div>
              </Link>
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
