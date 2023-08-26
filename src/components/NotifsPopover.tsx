import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";

const NotifsPopover = () => {
  return (
    <div className="">
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <button className="flex items-center justify-center">
            <BellIcon className="h-6 w-6" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          bg="white"
          color="black"
          position="sticky"
          tw="mx-auto max-w-xl min-w-48 rounded-md bg-white shadow outline-none focus-visible:(ring ring-violet-400/50)"
        >
          <PopoverArrow />
          <div className="flex justify-between rounded-t-md bg-gray-100 px-3 py-2">
            <PopoverHeader fontWeight="bold">Notifications</PopoverHeader>
            <PopoverCloseButton tw="p-0.5 w-6 h-6 rounded-full transition text-gray-600 hover:text-black focus-visible:(ring ring-violet-400/50)">
              <XMarkIcon />
            </PopoverCloseButton>
          </div>
          <PopoverBody className="p-2">
            <ul>
              {["Log your day!", "Your energy is low"].map((message) => (
                <li key={message} className="px-2 py-1 hover:bg-gray-50">
                  {message}
                </li>
              ))}
            </ul>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NotifsPopover;
