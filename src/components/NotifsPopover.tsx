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

const NotifsPopover = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <BellIcon className="relative h-6 w-6" />
        </PopoverTrigger>
        <PopoverContent
          bg="white"
          color="black"
          position="sticky"
          className="right-0 mx-auto max-w-xl rounded-md bg-white shadow"
        >
          <PopoverArrow />
          <div className="flex justify-between p-3">
            <PopoverHeader fontWeight="bold">Notifications</PopoverHeader>
            <PopoverCloseButton />
          </div>
          <PopoverBody className="p-4">
            <li>Log your day!</li>
            <li>Your energy is low</li>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NotifsPopover;
